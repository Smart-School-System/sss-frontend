import React from 'react';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
function ExcelSheet() {
    return (
            <SpreadsheetComponent
                width="100%"
                height="500"
                
                sheets={[
                    {
                        name: 'Sheet1',
                        rows: [
                            {
                                cells: [
                                    { index: 1, value: 'Hello' },
                                    { index: 2, value: 'World' },
                                ],
                            },
                        ],
                    },
                ]}
            />
        );
}

export default ExcelSheet;