import React from 'react';
export interface DraggerProps {
    onFile: (files: FileList) => void;
    children?: React.ReactNode;
}
export declare const Dragger: React.FC<DraggerProps>;
