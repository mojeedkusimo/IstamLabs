import QRCode from 'qrcode';
import React from 'react';
import { Component } from 'react';
import './bootstrap.min.css';

export class QR extends Component {
    generateQR() {
        let str = 'My first QR!';

        QRCode.toCanvas(document.getElementById('canvas'), str, function (error) {
            if(error) {
                console.log(error);
            }
            else {
                console.log('success!');
            }
        })
    }

    render() {
        return (
            <div>
                <canvas id='canvas' className='text-center'/>
                <button onClick={this.generateQR}>Generate QRCode</button>
            </div>
        )
    }
}

export default QR;