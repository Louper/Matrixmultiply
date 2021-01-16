using MatrixMultiply2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace MatrixMultiply2.Controllers
{
    public class MatrixController : ApiController
    {
        [HttpPost]

        public double[,] Sum(MatrixStorage storage)
        {

            int rows1 = storage.FirstMatrix.GetLength(0);
            int columns1 = storage.FirstMatrix.GetLength(1);
            int rows2 = storage.SecondMatrix.GetLength(0);
            int columns2 = storage.SecondMatrix.GetLength(1);

            if (columns1 == rows2)
            {
                double[,] product = new double[rows1, columns2];
                for (int i = 0; i < rows1; i++)
                {
                    // for each matrix 1 row, loop through matrix 2 columns  
                    for (int j = 0; j < columns2; j++)
                    {
                        // loop through matrix 1 columns to calculate the dot product  
                        for (int z = 0; z < columns1; z++)
                        {
                            product[i, j] += storage.FirstMatrix[i, z] * storage.SecondMatrix[z, j];
                        }
                    }
                }
                return product;
            }
            else
            {
                throw new InvalidOperationException("Remember the number of Rows on first Matrix must coincide with number of Columns on second Matrix! Check and try again!");
            }
        }
    }
}