import {
    BarChart, Bar, XAxis, YAxis, Tooltip,
    ResponsiveContainer
} from 'recharts'


const RatingChart = ({ ratingBreakdown }) => {

    const data = [
        { name: '5 star', value: ratingBreakdown['5'] },
        { name: '4 star', value: ratingBreakdown['4'] },
        { name: '3 star', value: ratingBreakdown['3'] },
        { name: '2 star', value: ratingBreakdown['2'] },
        { name: '1 star', value: ratingBreakdown['1'] },
    ]
    return (
        <div className='mx-3'>
            <h2 className='font-bold py-4 ml-3'>Ratings</h2>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data} layout="vertical">
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#f97316" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default RatingChart;