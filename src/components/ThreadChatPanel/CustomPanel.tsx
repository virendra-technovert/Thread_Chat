import React, { useState, useEffect } from "react";
import { useThreadStore } from "../../store/ThreadChatStore";
import { registerIcons } from "@fluentui/react/lib/Styling";
import { Panel, PanelType } from "@fluentui/react/lib/Panel";
import ThreadChat from "../ThreadChatContainer/ThreadChat";
import { CancelIcon } from "@fluentui/react-icons-mdl2";

registerIcons({
  icons: {
    Cancel: <CancelIcon />,
  },
});
const CustomPanel = () => {
  const isPanelOpen = useThreadStore((state) => state.isPanelOpen);
  const messageHead = useThreadStore((state) => state.threadMessageHead);
  const setPanelStore = useThreadStore((state) => state.setIsPanelOpen);
  const [isOpen, setIsOpen] = useState(isPanelOpen);
  useEffect(() => {
    setIsOpen(isPanelOpen);
  }, [isPanelOpen]);
  const dismissPanel = () => {
    setIsOpen(false);
    setPanelStore(false);
  };
  return (
    <div>
      <Panel
        isOpen={isOpen}
        onDismiss={dismissPanel}
        type={PanelType.custom}
        customWidth={"888px"}
        closeButtonAriaLabel="Close"
        headerText="Thread"
      >
        <ThreadChat
          threadHeadMessage={
            messageHead?.messageId ? messageHead?.messageId : ""
          }
        />
      </Panel>
    </div>
  );
};
export default CustomPanel;
