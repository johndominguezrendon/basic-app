import React from 'react';

const GoldenArrow = () => {
    return (
        <table className="table is-striped is-fullwidth is-bordered">
            <thead>
            <tr>
                <th>Station</th>
                <th>Status</th>
                <th>Arrival</th>
                <th>Departure</th>
            </tr>
            </thead>

            <tbody>
            <tr>
                <td>Cypress</td>
                <td className="has-text-success">ON-TIME</td>
                <td>14:00pm</td>
                <td>15:10pm</td>
            </tr>

            <tr>
                <td>Pine</td>
                <td className="has-text-danger">DELAYED</td>
                <td>15:20pm</td>
                <td>18:60pm</td>
            </tr>

            <tr>
                <td>Sycamore</td>
                <td className="has-text-danger">DELAYED</td>
                <td>15:20pm</td>
                <td>18:60pm</td>
            </tr>
            <tr>
                <td>Welten</td>
                <td className="has-text-success">ON-TIME</td>
                <td>15:20pm</td>
                <td>18:60pm</td>
            </tr>
            </tbody>
        </table>
    );
};

export default GoldenArrow;