import React, { ReactNode } from 'react';
import { InputText } from '@teambit/design.inputs.input-text';

export type ToDoProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function ToDo({ children }: ToDoProps) {
  return (
    <div>
      {children}
    </div>
  );
}
