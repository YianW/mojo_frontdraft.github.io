import { useEffect, useState } from 'react';

import { Grid } from '@mui/material';

import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
// import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';

import Cookies from 'universal-cookie';

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);
    const verify = (event) => {
        event.preventDefault();
        const cookies = new Cookies();
        const token = cookies.get('token');
        console.log(token);
        console.log(typeof token);
        if (token === undefined) {
            alert('Please login first.');
            window.location.replace('/free');
        }
    };

    return (
        <Grid container spacing={gridSpacing} onLoad={verify}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={8} md={12} sm={12} xs={12}>
                        <EarningCard isLoading={isLoading} />
                    </Grid>

                    {/* <Grid item lg={4} md={6} sm={12} xs={12}>
                        <TotalOrderLineChartCard isLoading={isLoading} />
                    </Grid> */}

                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeDarkCard isLoading={isLoading} />
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeLightCard isLoading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={8}>
                        <TotalGrowthBarChart isLoading={isLoading} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <PopularCard isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
