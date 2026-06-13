import * as React from "react";

export interface ModalProps {
  /** Whether the dialog is shown. */
  open: boolean;
  /** Called on close (Esc, backdrop click, or the × button). */
  onClose?: () => void;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
  /** Right-aligned footer actions row. */
  footer?: React.ReactNode;
  /** Max width in px. @default 480 */
  width?: number;
  /** Close when the backdrop is clicked. @default true */
  closeOnBackdrop?: boolean;
}

/** Centered dialog over a dimmed/blurred backdrop with fade+scale animation. */
export function Modal(props: ModalProps): JSX.Element | null;
