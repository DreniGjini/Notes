import React, { createContext, useState } from "react";
import IMarkDown from "../interfaces/IMarkDown";

export type MarkDownType = {
  markDowns: IMarkDown[];
  setMarkDowns: any;
};

export const MarkDownContext = createContext<MarkDownType>({
  markDowns: [{ id: "0", body: "" }],
  setMarkDowns: () => [{ id: 0, value: "" }],
});

export const MarkDownProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [markDowns, setMarkDowns] = useState<IMarkDown[]>([
    { id: "1", body: "### text1" },
    { id: "2", body: "## text2" },
    { id: "3", body: "# text3" },
    { id: "4", body: "**text4**" },
    { id: "5", body: "*text5*" },
  ]);

  return (
    <MarkDownContext.Provider value={{ markDowns, setMarkDowns }}>
      {children}
    </MarkDownContext.Provider>
  );
};
