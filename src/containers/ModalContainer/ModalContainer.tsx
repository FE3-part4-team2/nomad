import Modal2Base from '@/components/Modal2/Modal2Base';
import { ReactNode } from 'react';
import { useState } from 'react';

interface Modal2BaseProps {
  children: ReactNode;
  title: string;
  xbutton: boolean;
  background: string;
  size: string;
}

export default function ModalContainer({
  title,
  xbutton,
  children,
  background,
  size,
}: Modal2BaseProps) {
  const [open, setOpen] = useState(true);
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      {open && (
        <Modal2Base
          title={title}
          xbutton={xbutton}
          background={background}
          size={size}
          onClose={onClose}
        >
          {children}
        </Modal2Base>
      )}
    </>
  );
}
