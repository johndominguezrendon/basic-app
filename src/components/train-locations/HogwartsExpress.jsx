import React from 'react';

const HogwartsExpress = () => {
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
                <td>Pine</td>
                <td className="has-text-success">ON-TIME</td>
                <td>12:00pm</td>
                <td>12:10pm</td>
            </tr>

            <tr>
                <td>Sycamore</td>
                <td className="has-text-danger">DELAYED</td>
                <td>12:20pm</td>
                <td>13:60pm</td>
            </tr>
            <tr>
                <td>Oiele</td>
                <td className="has-text-success">ON-TIME</td>
                <td>12:20pm</td>
                <td>13:60pm</td>
            </tr>
            <tr>
                <td>Hummek</td>
                <td className="has-text-danger">DELAYED</td>
                <td>12:20pm</td>
                <td>13:60pm</td>
            </tr>
            </tbody>
        </table>
    );
};

export default HogwartsExpress;