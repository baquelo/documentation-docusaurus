import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Hello() {
    return (
        <Layout title="Hello">
            <div>
                <div className={styles.header}>      
                    <img
                        height="30px"
                        alt="Firefox"
                        src={useBaseUrl('img/firefox.png')}/>          
                    <h1>Support white styles module</h1>
                </div>
                <h1 className="purple-text">Support</h1>
            </div>
        </Layout>
    );
}

export default Hello;