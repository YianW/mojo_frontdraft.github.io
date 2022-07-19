import { Box, Card, Grid, Typography } from '@mui/material';

import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';

import BasicTabs from './TabMenu';

const ConPt = () => (
    <MainCard title="Buy Tokens">
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <SubCard sx={{ paddingTop: 5 }}>
                    <Grid container spacing={gridSpacing}>
                        <BasicTabs />
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12}>
                <SubCard title="Other Info">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} sm={6} md={4} lg={2}>
                            <Typography>Other Info.</Typography>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default ConPt;
