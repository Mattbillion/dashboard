import React, { useRef } from "react";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

export default function BasicDemo() {
  const toast = useRef<Toast>(null);

  const show = () => {
    toast.current?.show({
      severity: "info",
      summary: "Info",
      detail: "Message Content",
    });
  };

  return (
    <div className="card flex justify-content-center">
      <Toast ref={toast} />
      <Button onClick={show} label="Show" />
    </div>
  );
}
