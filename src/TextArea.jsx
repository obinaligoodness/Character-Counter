import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./ThemeProvider.jsx";
import { Box, TextField } from "@mui/material";
import CheckBox from "./CheckBox.jsx";
import LimitModal from "./LimitModal.jsx";

const TextArea = ({ onTextChange }) => {
    const { theme } = useContext(ThemeContext);
    const [text, setText] = useState("");
    const [excludeSpaces, setExcludeSpaces] = useState(false);
    const [readingTime, setReadingTime] = useState()
    const [characterLimit, setCharacterLimit] = useState(false)
    const [characterLimitValue, setCharacterLimitValue] = useState()
    const [openModal, setOpenModal] = useState(false)

    console.log(openModal)
    function analyzeText(text, includeSpaces) {

        const totalCharacters = includeSpaces ? text.length : text.replace(/\s+/g, "").length;
        const totalWords = text.trim() ? text.trim().split(/\s+/).length : 0;
        const totalSentences = (text.match(/[.!?]+/g) || []).length || 0;
        const readingTime = (totalWords / 200).toFixed(2);


        const letterCounts = {};
        const cleanText = includeSpaces ? text : text.replace(/\s+/g, "");

        for (let char of cleanText) {
            const lowerChar = char.toLowerCase();
            if (/[a-z]/.test(lowerChar)) {
                letterCounts[lowerChar] = (letterCounts[lowerChar] || 0) + 1;
            }
        }

        const letterDensity = Object.entries(letterCounts)
            .map(([letter, count]) => ({
                letter,
                count,
                percentage: ((count / totalCharacters) * 100).toFixed(2)
            }))
            .sort((a, b) => b.count - a.count);

        return {
            totalCharacters,
            totalWords,
            totalSentences,
            readingTime: `${readingTime} min`,
            letterDensity
        };
    }

    const handleChange = (event) => {
        let value = event?.target?.value;
        if (characterLimit === true) {
            if (!characterLimitValue || characterLimitValue <= 0) {
                setText(value);
                return;
            }

            if (value.length <= characterLimitValue) {
                setText(value);
            }
            else {
                setText(value.slice(0, characterLimitValue));
            }
        }
        if (characterLimit === false) {
            setText(value)
        }
    };

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    useEffect(() => {
        if (characterLimit === true && openModal === false) {
            setOpenModal(true)
        }
    }, [characterLimit]);

    useEffect(() => {

        if (characterLimit && characterLimitValue > 0 && text.length > characterLimitValue) {
            setText(text.slice(0, characterLimitValue));
        }
    }, [handleCloseModal]);

    console.log(characterLimitValue)

    useEffect(() => {
        const result = analyzeText(text, !excludeSpaces);
        setReadingTime(result.readingTime);
        onTextChange(result);
    }, [text, excludeSpaces, onTextChange]);




    return (
        <div>
            <Box sx={{ marginBottom: "4px", paddingX: "6px" }}>
                <TextField
                    fullWidth
                    id="fullWidth"
                    placeholder="Start typing here... (or paste your text)"
                    multiline
                    rows={7}
                    variant="outlined"
                    value={text}
                    onChange={handleChange}
                    className="dark:bg-[#21222d] bg-[#f3f2f9] border-4 border-[#f2f1f4] dark:border-[#282932] rounded-lg"
                    sx={{
                        "& .MuiInputBase-input": {
                            color: theme === "dark" ? "white" : "black",
                        },
                    }}
                />

                <div className='flex md:flex-row flex-col  justify-between justify-items-center mt-4 ' >
                    <div className='flex md:flex-row flex-col px-2'>
                        <CheckBox
                            label={"Exclude spaces"}
                            isChecked={excludeSpaces}
                            func={() => setExcludeSpaces(!excludeSpaces)}
                        />
                        <CheckBox
                            label={"Set character limit"}
                            isChecked={characterLimit}
                            func={() => {
                                setCharacterLimit((prev) => {
                                    if (prev) {
                                        setCharacterLimitValue(undefined);
                                    }
                                    return !prev;
                                });
                            }}
                        />
                    </div>
                    <div className='px-2'>Approx. reading time: {readingTime}</div>
                </div>

            </Box >
            <LimitModal open={openModal} func={setCharacterLimitValue} handleClose={handleCloseModal} />
        </div >
    );
};

export default TextArea;
