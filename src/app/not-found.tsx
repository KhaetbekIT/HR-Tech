import { Header } from '@/layout/header'
import { menu } from './my-info/page'

function NotFound() {

    return (
        <>
            <Header menu={menu} />

            <section className='bg-[#dae6f2]'>
                <div className="max-w-[1350px] px-4 pt-[34px] mx-auto h-[184px]">
                    <h2 className="text-[28px] font-semibold text-center">
                        404 - Page Not Found
                    </h2>
                </div>
            </section>
        </>
    );
}

export default NotFound;