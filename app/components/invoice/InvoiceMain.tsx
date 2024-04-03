"use client";

// RHF
import { useFormContext } from "react-hook-form";

// ShadCn
import { Form } from "@/components/ui/form";

// Components
import { InvoiceActions, InvoiceForm } from "@/app/components";

// Context
import { useInvoiceContext } from "@/contexts/InvoiceContext";

// Types
import { InvoiceType } from "@/types";
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
// Styled component for custom styling


const InvoiceMain = () => {
    const { handleSubmit } = useFormContext<InvoiceType>();

    // Get the needed values from invoice context
    const { onFormSubmit } = useInvoiceContext();

    return (
        <>
            {/* <Form {...useFormContext<InvoiceType>()}>
                <form
                    onSubmit={handleSubmit(onFormSubmit, (err) => {
                        console.log(err);
                    })}
                > */}
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                                <InvoiceForm />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <InvoiceActions />
                            </Grid>
                        </Grid>
                        </Box>
                {/* </form>
            </Form> */}
        </>
    );
};

export default InvoiceMain;
