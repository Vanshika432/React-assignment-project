import { useEffect , useMemo, useState} from "react";
import { DataGrid , GridCellParams } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Avatar } from "@mui/material";
import "../css/SecondPage.css"

interface resultProps{
   avatar_url: string;
   id: number;
   login:string;
   url:string;
 };
 
 export default function SecondPage() {
   const [result, setResult] = useState<resultProps[]>([]);
 
   useEffect(() => {
     const api = async () => {
       const data = await fetch("https://api.github.com/users", {
         method: "GET"
       });
       const jsonData = await data.json();
       setResult(jsonData);
     };
 
     api();
   }, []);

   const columns = useMemo(() => [
      {field: 'avatar_url', headerName: 'Avatar', width:60, renderCell: (params: GridCellParams) => <Avatar src={params.row.avatar_url} /> , sortable:false, filterable:false},
      {field: 'id', headerName: 'Id',width: 100},
      {field: 'login', headerName: 'Username', width: 200},
      {field: 'url', headerName: 'Profile', width: 300},
   ], [])

   return (
      <div className="body">
         <Box sx={{ height: 400, width: '45%',padding:'2rem',border:'3px solid black' }}>
            <DataGrid columns={columns} rows={result} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }} />
         </Box>
      </div>
   )
}
 