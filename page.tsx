import styles from '../page.module.css';
import Image from 'next/image';
export default function sites()
{
    return(
        <div>
            <div className="sitesBg ">
                <section className={styles.siteBg}>
                    <div className="text-4xl text-white">
                        One stop Home Destinaations!!
                    </div>
                </section>
            </div>

            <div className='p-20'>
                <div className='grid lg:grid-cols-4 gap-4 sm:grid-cols-2'>
                    <div className="relative w-72 h-96 "><Image src="/sites_images/pool3.jpg" alt='not'  layout="fill"/></div>
                    <div ><Image src="/sites_images/apartment3.jpg" width={300}height={1} alt='not' /></div>
                    <div><Image src="/sites_images/balcony.jpg" width={300} height={250} alt='not' /></div>
                    <div><Image src="/sites_images/apartment2.jpg" width={300} height={250} alt='not' /></div>  
                </div>
            </div>
        </div>
    )
}