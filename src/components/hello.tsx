import * as React from 'react';

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => {
  return (
    <div>
      <h1>Hello from {props.compiler} and {props.framework}!</h1>
      <h2>Test</h2>
      <input type="text" />
      spa
    </div>
  );
}