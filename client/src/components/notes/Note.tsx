import { TrashIcon } from "@heroicons/react/24/outline";
import Markdown from "markdown-to-jsx";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Prompt } from "react-router-dom";
import { useSaveNoteMutation } from "../../Graphql/graphql";
import { compareIfDate } from "../../utils/date/compareDate";
import { formatDate } from "../../utils/date/formatDate";
import { getHour } from "../../utils/date/getHour";
import Card from "../ui/Card";

interface NoteProps {
  id: string;
  body: string;
  date: Date;
  onDeleteButton: () => void;
}

const Note: React.FC<NoteProps> = ({ body, id, date, onDeleteButton }) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [value, setValue] = useState<string>(body);

  const [saveNote] = useSaveNoteMutation({
    variables: {
      createOrUpdateNoteInput: {
        id,
        body: value,
      },
    },
  });

  const blurHandler = () => {
    //uppon leaving page, the changes on notes are saved and not discarded unlike when creating new one
    if (!value) {
      toast.error("value set back because you didnt provide a new value");
      return setValue(body);
    }

    saveNote()
      .then(() => setEditMode(false))
      .catch(() => toast.error("Something went wrong"));
  };

  return (
    <>
      <Card className="prose prose-headings:m-0 prose-p:-m-0  relative w-full h-full  ">
        <div className="w-full h-full">
          {editMode ? (
            <textarea
              autoFocus
              placeholder="Enter a new note"
              className="border-none outline-none resize-none rounded-md h-5/6 mt-1   w-full overflow-y-auto   "
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={blurHandler}
            />
          ) : (
            <div
              className="overflow-y-auto mt-1"
              onClick={() => {
                setEditMode(true);
              }}
            >
              <Markdown>{body}</Markdown>
            </div>
          )}
          <p className="text-xs absolute top-1 left-2 m-0 ">
            {formatDate(date)} {compareIfDate(date) && `(Today)`}{" "}
            {getHour(date)}
          </p>
          <TrashIcon
            className="w-5 h-5 absolute top-1 right-2 cursor-pointer text-red-400"
            onClick={onDeleteButton}
          />
        </div>
      </Card>
    </>
  );
};

export default Note;
