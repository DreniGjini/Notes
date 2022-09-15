import React, { useState, useContext, DragEventHandler } from "react";
import { toast } from "react-hot-toast";
import IMarkDown from "../../interfaces/IMarkDown";
import { MarkDownContext } from "../../contexts/MarkdownContext";
import {
  useDeleteNoteMutation,
  useGetNotesQuery,
  useSaveNoteMutation,
} from "../../Graphql/graphql";
import Note from "../../components/notes/Note";
import Modal from "../../components/ui/Modal";
import NewNote from "../../components/notes/NewNote";

interface NotesProps {}

const Notes: React.FC<NotesProps> = () => {
  const [saveNote] = useSaveNoteMutation();

  const [deleteNote] = useDeleteNoteMutation();
  const { data, loading, error, refetch } = useGetNotesQuery({
    fetchPolicy: "network-only",
  });

  if (error) toast.error("Something is wrong with the server");

  const dragOver = (event: Event | any) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const dropEnd = (event: any, id: string) => {
    event.target.style.left = `${event.pageX - 140}px`;
    event.target.style.top = `${event.pageY - 70}px`;
    saveNote({
      variables: {
        createOrUpdateNoteInput: {
          id,
          pagex: event.pageX - 140,
          pagey: event.pageY - 70,
        },
      },
    }).catch(() => toast.error("Something Wrong happend"));
  };

  return (
    <div onDragOver={dragOver} className=" h-full w-full pt-20 overflow-hidden">
      {data?.getNotes.map((md, i) => {
        return (
          <div
            key={md.id}
            onDragEnd={(e: any) => dropEnd(e, md.id)}
            draggable="true"
            style={{ left: `${md.pagex}px`, top: `${md.pagey}px` }}
            className="max-w-xs absolute w-72 cursor-grab h-40 "
          >
            <Note
              id={md.id}
              body={md.body}
              date={md.createdAt}
              onDeleteButton={() =>
                deleteNote({
                  variables: {
                    removeNoteId: md.id,
                  },
                })
                  .then(() => refetch())
                  .catch(() => toast.error("something wrong happend"))
              }
            />
          </div>
        );
      })}

      <NewNote refetchQuery={() => refetch()} />
    </div>
  );
};

export default Notes;
