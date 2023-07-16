/** @jsxImportSource react */
import {qwikify$} from '@builder.io/qwik-react';
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import items from "./data/data.json";

// Create React component standard way
export const Items = qwikify$(() => {
    return (<Box sx={{width: 500, minHeight: 800}}>
        <Masonry
            columns={3} spacing={2}>
            {items.map((item, index) => (
                <div key={index}>
                    <p>{index + 1}</p>
                    <img
                        src={`${item.img}?w=162&auto=format`}
                        srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                        style={{
                            borderBottomLeftRadius: 4,
                            borderBottomRightRadius: 4,
                            display: 'block',
                            width: '100%',
                        }}
                    />
                </div>
            ))}
        </Masonry>
    </Box>);
});