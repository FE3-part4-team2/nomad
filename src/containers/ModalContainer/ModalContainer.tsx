import Modal2Base from '@/components/Modal2/Modal2Base';
import { ReactNode } from 'react';
import { useState } from 'react';

interface Modal2BaseProps {
  children: ReactNode;
  title: string;
  xbutton: boolean;
  background: string;
  size: string;
  onClose: () => void;
}

export default function ModalContainer({
  title,
  xbutton,
  children,
  background,
  size,
  onClose,
}: Modal2BaseProps) {
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
