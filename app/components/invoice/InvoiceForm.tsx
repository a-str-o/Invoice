"use client";

import React, { useMemo } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { useTranslationContext } from '@/contexts/TranslationContext';
import { useFormContext, useWatch } from 'react-hook-form';
import { Wizard } from 'react-use-wizard';
import {
        WizardStep,
        BillFromSection,
        BillToSection,
        InvoiceDetails,
        Items,
        PaymentInformation,
        InvoiceSummary,
    } from "@/app/components";

    const StyledCard = styled(Card)({
  width: '55%',
});

const StyledCardContent = styled(CardContent)({
});

// Component
const InvoiceForm = () => {
  const { _t } = useTranslationContext();
  const { control } = useFormContext();

  // Get invoice number variable
  const invoiceNumber = useWatch({
    name: "details.invoiceNumber",
    control,
  });

  const invoiceNumberLabel = useMemo(() => {
    if (invoiceNumber) {
      return `#${invoiceNumber}`;
    } else {
      return _t("form.newInvBadge");
    }
  }, [invoiceNumber, _t]);

  return (
    <StyledCard>
      <CardHeader>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Typography variant="body1" style={{ textTransform: 'uppercase' }}>
            {_t("form.title")}
          </Typography>
          <Badge variant="standard">
            <Typography variant="body2" style={{ fontSize: "14px" }}>
              {invoiceNumberLabel}
            </Typography>
          </Badge>
        </div>
        <Typography variant="body2">
          {_t("form.description")}
        </Typography>
      </CardHeader>
      <StyledCardContent>
        <div style={{ marginTop: '16px' }}>
          <Wizard>
            <WizardStep>
              <div style={{ display: 'flex', gap: '20px' }}>
                <BillFromSection />
                <BillToSection />
              </div>
            </WizardStep>
            <WizardStep>
              <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
                <InvoiceDetails />
              </div>
            </WizardStep>
            <WizardStep>
              <Items />
            </WizardStep>
            <WizardStep>
              <PaymentInformation />
            </WizardStep>
            <WizardStep>
              <InvoiceSummary />
            </WizardStep>
          </Wizard>
        </div>
      </StyledCardContent>
    </StyledCard>
  );
};

export default InvoiceForm;
