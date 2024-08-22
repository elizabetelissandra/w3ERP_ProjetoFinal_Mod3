import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Product } from '../../types/DashboardTypes';
import { axiosProdutos } from '../../api/axiosConfig';

interface TableAccessibleProps {
    rows: Product[],
}

const AccessibleTable: React.FC<TableAccessibleProps> = ({rows}) => {


  const formatToUTC = (isoDate: string) => {
    const date = new Date(isoDate);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <TableContainer component={Paper} sx={{display: 'flex', justifyContent: 'center'
    }}>
      <Table sx={{ minWidth: 250, backgroundColor: '#D3D3D3' }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell sx={{color: "#796CE0", fontWeight: 'bold', fontSize: '18px'}}>Produto</TableCell>
            <TableCell align="right" sx={{color: "#796CE0", fontWeight: 'bold', fontSize: '18px'}}>Próx. Compra </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: Product) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right" sx={{fontWeight: "bold"}}>{formatToUTC(row.nextPurchase)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AccessibleTable