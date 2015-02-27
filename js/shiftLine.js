  /* This function shifts the line coordinates in order to avoid 
            the line being placed upon the station circle. */
            function shiftLine(x1, y1, x2, y2) {
                var a, b, c, d, m = (y2 - y1)/(x2 - x1);
                if(x1 < x2) {
                    a = x1 + 8 / Math.sqrt(1 + m*m); 
                }
                else {
                    a = x1 - 8 / Math.sqrt(1 + m * m); 
                }
                b = m * (a - x1) + y1;

                m = (y1 - y2) / (x1 - x2);
                if(x2 < x1) {
                    c = x2 + 8 / Math.sqrt(1 + m*m); 
                }
                else {
                    c = x2 - 8 / Math.sqrt(1 + m * m); 
                }
                d = m * (c - x2) + y2;
                
                return [a, b, c, d]; 
            }