export interface Region {
  id: number;
  name: string;
  value: number;
}

export interface Server {
  id: number;
  name: string;
  value: number;
}

export interface Risk {
  id: number;
  name: string;
  value: number;
}

export interface Abnormal {
  id: number;
  name: string;
  value: number;
}

export interface Relation {
  id: number;
  name: string;
  source: string;
  target: string;
  speed: number;
  value: [number, number];
}

export interface WordCloudData {
  datas: Array<{ value: number; name: string }>;
}

export interface MapData {
  voltageLevel: string[];
  colors: string[];
  categoryData: {
    [key: string]: Array<{ name: string; value: number }>;
  };
}

export interface TotalData {
  total: string;
  hb: string;
  db: string;
  hd: string;
  zn: string;
  xn: string;
  xb: string;
}

export interface VisualizationResult {
  regionData: {
    regions: Region[];
  };
  serverData: {
    servers: Server[];
  };
  riskData: {
    risks: Risk[];
  };
  abnormalData: {
    abnormals: Abnormal[];
  };
  relationData: {
    relations: Relation[];
  };
  wordCloudData: WordCloudData;
  mapData: MapData;
  totalData: TotalData;
}

export function getVisualization() {
  return axios.get<VisualizationResult, VisualizationResult>('/visualization');
}
