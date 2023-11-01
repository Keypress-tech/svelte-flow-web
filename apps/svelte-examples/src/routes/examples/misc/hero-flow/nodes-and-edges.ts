import type { Node, Edge } from '@xyflow/svelte';
import { writable, type Writable } from 'svelte/store';

export type FlowState = {
  color: string;
  zoom: number;
  shape: string;
};

const flowState = writable<FlowState>({
  color: '#ff4000',
  zoom: 17,
  shape: 'cube'
});

export type NodeData = {
  flowState: Writable<FlowState>;
  label: string;
};

export const initialNodes: Node[] = [
  {
    id: 'hero',
    type: 'hero',
    position: { x: 390, y: 50 },
    data: {
      flowState,
      label: 'output'
    },
    class: 'w-[200px] lg:w-[300px]'
  },
  {
    id: 'color',
    type: 'colorpicker',
    position: { x: 50, y: 0 },
    data: {
      flowState,
      label: 'shape color'
    },
    class: 'w-[150px]'
  },
  {
    id: 'shape',
    type: 'switcher',
    position: { x: 0, y: 125 },
    data: {
      flowState,
      label: 'shape type'
    },
    class: 'w-[150px]'
  },
  {
    id: 'zoom',
    type: 'slider',
    position: { x: 40, y: 280 },
    data: {
      flowState,
      label: 'zoom level'
    },
    class: 'w-[150px]'
  }
];

const edgeStyle = 'stroke:#D2D2D2; stroke-width:2;';

export const initialEdges: Edge[] = [
  {
    id: 'color->hero',
    source: 'color',
    target: 'hero',
    targetHandle: 'color',
    style: edgeStyle,
    animated: true
  },
  {
    id: 'shape->hero',
    source: 'shape',
    target: 'hero',
    targetHandle: 'shape',
    style: edgeStyle,
    animated: true
  },
  {
    id: 'zoom->hero',
    source: 'zoom',
    target: 'hero',
    targetHandle: 'zoom',
    style: edgeStyle,
    animated: true
  }
];
