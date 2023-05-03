import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { ConfirmPopup, confirmPopup } from "primereact/confirmpopup";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";

export default function Confirm(props: {
  setActiveList: Dispatch<SetStateAction<boolean>>;
  toast: any;
}) {
  const { setActiveList, toast } = props;
  const [visible, setVisible] = useState<boolean>(false);
  const buttonEl = useRef<any>(null);

  const accept = () => {
    toast.current?.show({
      severity: "info",
      summary: "Confirmed",
      detail: "You have accepted",
      life: 1000,
    });
    setActiveList(false);
  };

  const reject = () => {
    toast.current?.show({
      severity: "warn",
      summary: "Rejected",
      detail: "You have rejected",
      life: 1000,
    });
  };

  return (
    <>
      <ConfirmPopup
        target={buttonEl.current}
        visible={visible}
        onHide={() => setVisible(false)}
        message="Are you sure you want to proceed?"
        accept={accept}
        reject={reject}
      />
      <div className="card flex justify-content-center">
        <Button
          ref={buttonEl}
          onClick={() => setVisible(true)}
          icon="pi pi-check"
          label="Confirm"
          size="small"
        />
      </div>
    </>
  );
}
