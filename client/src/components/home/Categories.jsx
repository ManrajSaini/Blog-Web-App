import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import { categories } from '../../constants/data';

const StyledTable = styled(Table)`
  border: 3px solid rgb(0, 0, 0);
`;

const StyledButton = styled(Button)`
  margin: 20px;
  width: 85%;
  background: #1b4a9e;
  color: #fff;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: 700;
`;

const Categories = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');

  return (
    <div style={{ marginLeft: '10px', marginBottom: '15px' }}>
      <Link to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
        <StyledButton variant="contained">Create Blog</StyledButton>
      </Link>

      <StyledTable>
        <TableHead>
          <TableRow>
            <TableCell>
              <StyledLink to="/">All Categories</StyledLink>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((categoryObj) => (
            <TableRow key={categoryObj.id}>
              <TableCell
                style={{
                  borderTop: '2px solid black',
                  backgroundColor: categoryObj.type === category ? 'lightgrey' : 'inherit',
                }}
              >
                <StyledLink to={`/?category=${categoryObj.type}`}>{categoryObj.type}</StyledLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </div>
  );
};

export default Categories;
