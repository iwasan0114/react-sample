"use client"

import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'

const names = [
  { name: 'TARO', kana: 'タロウ', birth: '1990年1月1日' },
  { name: 'HANAKO', kana: 'ハナコ', birth: '1991年2月2日' },
  { name: 'JIRO', kana: 'ジロウ', birth: '1992年3月3日' },
  { name: 'YUKI', kana: 'ユキ', birth: '1993年4月4日' },
  { name: 'SABURO', kana: 'サブロウ', birth: '1994年5月5日' }
];

const rows: GridRowsProp = Array.from({ length: 27 }, (_, i) => {
  const n = names[i % names.length];
  return {
    id: i + 1,
    name: n.name,
    kana: n.kana,
    birth: n.birth
  };
});

export default function Table() {
  const cols: GridColDef[] = [
    {
      field: 'name',
      headerName: '英字'
    },
    {
      field: 'kana',
      headerName: '仮名'
    },
    {
      field: 'birth',
      headerName: '生年月日'
    }
  ]

  return (
    <div style={{ width: '100%', height: 400 }}>
      <DataGrid columns={cols} rows={rows} />
    </div>
  )
}