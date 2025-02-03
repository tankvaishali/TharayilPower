import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import { Box, useMediaQuery, useTheme, ClickAwayListener } from "@mui/material";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

let itemData = [
    {
        img: require("../../Assets/Images/profile/Gallery (1).jpg"),
    },
    {
        img: require("../../Assets/Images/profile/Gallery (2).jpg"),
    },
    {
        img: require("../../Assets/Images/profile/Gallery (3).jpg"),
    },
    {
        img: require("../../Assets/Images/profile/Gallery (4).jpg"),
    },
    {
        img: require("../../Assets/Images/profile/Gallery (5).jpg"),
    },
    {
        img: require("../../Assets/Images/profile/Gallery (6).jpg"),
    },
    {
        img: require("../../Assets/Images/profile/Gallery (7).jpg"),
    },
    {
        img: require("../../Assets/Images/profile/Gallery (8).jpg"),
    },
    {
        img: require("../../Assets/Images/profile/Gallery (9).jpg"),
    },
    {
        img: require("../../Assets/Images/profile/Gallery (10).jpg"),
    },
    {
        img: require("../../Assets/Images/profile/Gallery (11).jpg"),
    },

];

function Gallery() {
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const theme = useTheme();
    const isLg = useMediaQuery(theme.breakpoints.up("lg"));
    const isMd = useMediaQuery(theme.breakpoints.between("md", "lg"));
    const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));

    let cols = 1;
    if (isLg) {
        cols = 3;
    } else if (isMd) {
        cols = 2;
    } else if (isSm) {
        cols = 1;
    }

    const handleClickOpen = (index) => {
        setSelectedIndex(index);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedIndex(null);
    };

    const handlePrevImage = () => {
        setSelectedIndex((prevIndex) => (prevIndex === 0 ? itemData.length - 1 : prevIndex - 1));
    };

    const handleNextImage = () => {
        setSelectedIndex((prevIndex) => (prevIndex === itemData.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <div className="container text-center my-5">
                <section className="portfolio">
                    <div className="mb-5">
                        <div
                            className="dark_stroke font_stroke text-center"
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            data-aos-once="true"
                        >
                            Gallery
                        </div>
                        <div
                            className="ftittle text-dark text-center"
                            data-aos="fade-down"
                            data-aos-duration="1500"
                            data-aos-once="true"
                        >
                            Art in Solar Light
                        </div>
                    </div>
                    <div className="row">
                        <Box sx={{ flexGrow: 1 }}>
                            <ImageList
                                variant="masonry"
                                cols={cols}
                                gap={30}
                                className="overflow-hidden"
                                sx={{
                                    maxWidth: "75%",
                                    margin: "auto",
                                    "@media (min-width: 900px)": {
                                        cols: 3,
                                    },
                                    "@media (min-width: 710px) and (max-width: 890px)": {
                                        cols: 2,
                                    },
                                    "@media (max-width: 600px)": {
                                        cols: 1,
                                    },
                                }}
                            >
                                {itemData.map((item, index) => (
                                    <ImageListItem key={item.img}>
                                        <div
                                            className="image-container galleryimage overflow-hidden"
                                            onClick={() => handleClickOpen(index)}
                                            style={{ cursor: "zoom-in" }}
                                        >
                                            <img
                                                src={item.img}
                                                alt="not found"
                                                className="image"
                                            />
                                        </div>
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Box>
                    </div>
                </section>
            </div>

            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="lg"
                fullWidth
                PaperProps={{
                    style: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                    },
                }}
            >
                <ClickAwayListener onClickAway={handleClose}>
                    <div style={{ position: 'relative', height: '100%' }}>
                        <div onClick={handleClose} className="position-fixed top-0 end-0  text-white fs-3 fw-bold  bg-success  rounded-circle d-flex justify-content-center align-content-center align-items-center m-3 pb-1" style={{ width: "40px", height: "40px", cursor: "pointer" }}>x</div>
                       
                        <DialogContent
                            sx={{
                                padding: 0,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "relative",
                            }}
                        >
                            {selectedIndex !== null && (
                                <img
                                    src={itemData[selectedIndex].img}
                                    alt="Selected"
                                    style={{ width: "55vw", height: "80vh", objectFit: "contain" }}
                                />
                            )}
                            <IconButton
                                onClick={handlePrevImage}
                                className="bg-success"
                                sx={{
                                    position: 'absolute',
                                    left: 0,
                                    color: 'white',
                                    top: "50%",
                                    transform: 'translateY(-50%)',
                                    zIndex: 1000,

                                    borderRadius: '50%',

                                }}
                            >
                                <IoChevronBack size={20} />
                            </IconButton>

                            <IconButton
                                onClick={handleNextImage}
                                className="bg-success"

                                sx={{
                                    position: 'absolute',
                                    right: 0,
                                    color: 'white',
                                    top: "50%",
                                    transform: 'translateY(-50%)',
                                    zIndex: 1000,

                                    borderRadius: '50%',

                                }}
                            >
                                <IoChevronForward size={20} />
                            </IconButton>
                        </DialogContent>
                    </div>
                </ClickAwayListener>
            </Dialog>

        </>
    );
}

export default Gallery;
