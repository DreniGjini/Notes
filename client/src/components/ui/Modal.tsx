 /* eslint-disable max-lines */
/* eslint-disable @typescript-eslint/indent */
import { XCircleIcon } from "@heroicons/react/24/outline";
import { FC, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import checkDevice from "../../utils/isTouch";
import Animation from "./Animation";

export interface PortalProps {
  onClose: () => void;
  show: boolean;
  title: ReactNode;
  position: "side" | "center";
  // fireEvent?: () => void;
  buttonElement?: ReactNode;
  children?: ReactNode;
  modalWidth?: string;
}

export type Keys = {
  [key: string]: () => void;
};

export const Modal: FC<PortalProps> = ({
  children,
  show,
  onClose,
  title,
  position,
  buttonElement,
  modalWidth
}) => {
  const isTouch = checkDevice();
  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      const keys: Keys = {
        Escape: () => {
          e.preventDefault();
          window.removeEventListener("keyup", handleKeyUp, false);
          onClose();
        }
      };
      if (keys[e.key]) {
        keys[e.key]();
      }
    };

    window.addEventListener("keyup", handleKeyUp, false);
    show && document.body.classList.add("overflow-hidden");

    return () => {
      window.removeEventListener("keyup", handleKeyUp, false);
      show && document.body.classList.remove("overflow-hidden");
    };
  }, [show]);

  let modalPosition;
  if (position === "side")
    modalPosition =
      "md:w-80 w-full h-full right-0 top-0 bottom-0 left-0 md:left-auto md:bottom:auto";
  else if (position === "center") {
    modalPosition =
      "md:w-[500px] md:min-h-[250px] md:max-h-[550px] md:m-auto inset-0 rounded-lg";
  }
  return show
    ? createPortal(
      <div className="fixed inset-0 z-50">
        <Animation show={show} type="fade" duration={300}>
          <span
            onClick={onClose}
            className={"absolute bg-black bg-opacity-20 inset-0 z-40"}
          />
        </Animation>
        <Animation
          show={show}
          type={`${position === "center" ? "fade-out" : "fade-right"}`}
          duration={300}
          translateShift="translate-x-80"
        >
          <div
            style={{
              width: (!isTouch ? modalWidth : "100%")
            }}
            className={`absolute bg-white overflow-hidden z-50 ${modalPosition}`}
          >
            <div className="flex shadow items-center px-4 py-1 justify-between h-14">
              <div>{title}</div>
              <span
                className="w-12 h-12 inline-flex items-center
                  justify-center cursor-pointer absolute right-0"
                onClick={onClose}
              >
                <XCircleIcon className="w-5 h-5" />
              </span>
            </div>
            <div
              className="overflow-y-auto overflow-x-hidden"
              style={{
                minHeight: `${buttonElement ? "calc(100% - 7rem)" : "calc(100% - 3.5rem)"
                  }`,
                height: `${buttonElement ? "calc(100% - 7rem)" : "calc(100% - 3.5rem)"
                  }`
              }}
            >
              {children}
            </div>
            {buttonElement && (
              <div
                className={`w-full px-4 h-16 flex items-center ${position === "side"
                  ? "shadow-lg shadow-black-900 justify-center"
                  : "justify-end"
                  }`}
              >
                {position === "center" && (
                  <button
                    className="mr-4 border border-gray-300 px-3 py-2 rounded-md"
                    onClick={onClose}
                  >
                    Close
                  </button>
                )}
                {buttonElement}
              </div>
            )}
          </div>
        </Animation>
      </div>,
      document.body
    )
    : null;
};

export default Modal;
