import { useContext, useState } from "react";
import Card from "../ui/Card";
import Modal from "../ui/Modal";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { toast } from "react-hot-toast";
import { useSaveNoteMutation } from "../../Graphql/graphql";
import { Prompt } from "react-router-dom";

interface NewNoteProps {
  refetchQuery: () => void;
}
const NewNote: React.FC<NewNoteProps> = ({ refetchQuery }) => {
  const [newNoteVal, setNewNoteVal] = useState<string>("");

  const [saveNote] = useSaveNoteMutation();

  const handleNewNote = (e: any) => {
    e.preventDefault();
    if (!newNoteVal) return toast.error("Cannot create empty note");
    saveNote({
      variables: {
        createOrUpdateNoteInput: {
          body: newNoteVal,
          pagex: 150,
          pagey: 150,
        },
      },
    })
      .then(() => refetchQuery())
      .finally(() => {
        toast.success("Note successfully added!");
        setNewNoteVal("");
      });
  };
  return (
    <>
      <form onSubmit={handleNewNote}>
        <Card
          className="bg-white text-gray-700 flex justify-center items-center flex-col w-56 h-96 absolute bottom-5 left-5
        text-center  transform-gpu scale-100 hover:scale-105 transition-transform duration-500"
        >
          <textarea
            placeholder="Enter a new note"
            className="border resize-none rounded-md w-full p-2 min-h-[200px] h-4/6 my-5"
            value={newNoteVal}
            onChange={(e) => setNewNoteVal(e.target.value)}
          />
          <button type="submit" className="flex flex-col items-center">
            <PlusCircleIcon className="w-7 h-7" />
            Add new note
          </button>
        </Card>
      </form>

      <Prompt
        when={newNoteVal !== ""}
        message="Are you sure you want to leave? You have unfinished work"
      />
    </>
  );
};

export default NewNote;
