import React, { FC } from 'react';
import './GgbEditor.scss';

import { createEditor } from "./editor/rete";

interface GgbEditorProps {}

const GgbEditor: FC<GgbEditorProps> = () => (
  <div className="GgbEditor">
    <div className='node-editor' style={{ width: "100vw", height: "100vh" }}>
      <div ref={ref => ref && createEditor(ref)} />
    </div>
  </div>
);

export default GgbEditor;
