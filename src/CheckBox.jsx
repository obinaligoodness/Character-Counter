import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

const CheckBox = ({ label, func, isChecked }) => {

    return (
        <FormControlLabel
            control={
                <Checkbox
                    onChange={func}
                    icon={
                        <span
                            style={{
                                width: 18,
                                height: 18,
                                border: '2px solid #98A2B3',
                                borderRadius: 4,
                            }}
                        />
                    }
                    checkedIcon={
                        <span
                            style={{
                                width: 18,
                                height: 18,
                                border: '1px solid #095AD3',
                                borderRadius: 4,
                                backgroundColor: '#E6EFFB',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={4}
                                stroke="#095AD3"
                                style={{
                                    width: '14px',
                                    height: '14px',
                                    backgroundColor: 'transparent',
                                }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                        </span>
                    }
                    checked={isChecked}
                    sx={{
                        '&.Mui-checked:hover': {
                            backgroundColor: 'transparent',
                        },
                    }}
                />
            }
            label={label}
            className={`cursor-pointer`}
        />
    );
};

export default CheckBox;
