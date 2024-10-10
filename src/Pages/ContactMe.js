import Header from '../components/Header'
import Footer from '../components/Footer'
import { showModal, closeModal, FormSubmit} from '../components/EventHandler';
import '../css/customStyle.css';


function ContactMe() {


    return (
        <div>
            <Header />

            <div className=''>
                <center>
                    <h1 className="text-6xl font-semibold py-10 ">Contact Me</h1>
                    <hr className="w-4/5 my-7 border-t-2 border-b-2 border-black" />
                </center>
                <div className='lg:flex'>
                    <div className='basis-1/2 relative '>
                        <img className="absolute ml-36 mt-2 z-10 opacity-25" src="/conatctMeBackground.png" width="350" alt='contact-background-image'></img>
                        <center className='d-flex flex-col justify-content-center relative z-20'>
                            <h3 className="text-2xl py-5 mt-20"><strong>Need Help?</strong></h3>
                            <p className='p-10 text-xl font-semibold'>Get in touch with me via filling the form or sending me a messege using my contact Details.</p>
                            <button className="btn border-gray-300 md:mt-20" onClick={() => showModal()}>View Contact Details</button>
                        </center>
                    </div>
                    <div className='basis-1/2 z-40 relative contact-container lg:shrink'>
                        <center>
                            <h3 className="text-2xl py-5"><strong>MESSAGE ME</strong></h3>
                            <form className='form-control w-3/4'>
                                <label className="input input-bordered flex items-center gap-2 m-2">
                                    Name:
                                    <input type="text" className="grow" placeholder="" required />
                                </label>
                                <label className="input input-bordered flex items-center gap-2 m-2">
                                    Email:
                                    <input type="email" className="grow" placeholder="" required />
                                </label>
                                <label className="input input-bordered flex items-center gap-2 m-2">
                                    Phone:
                                    <input type="tel" className="grow" placeholder="" required />
                                </label>
                                <textarea className="textarea textarea-bordered m-2" placeholder="Message" required></textarea>
                                <button onClick={() => FormSubmit()} type="button" className="btn btn-success m-2">Send</button>
                            </form>
                        </center>
                    </div>
                </div>
            </div>

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <center>
                        <h3 className="font-bold text-2xl pb-5 "><strong>CONTACT DETAILS</strong></h3>
                        <hr className="w-full border-black " />
                        <h6 className="text-2xl pt-5"><a className='link link-hover' href="mailto:jayarbaniqued29@gmail.com">jayarbaniqued29@gmail.com</a></h6>
                        <h6 className="text-2xl">0951-072-8003</h6>
                        <h6 className="text-2xl pt-5"><strong>LinkedIn</strong></h6>
                        <h6 className="text-2xl"><a className='link link-hover' href="https://www.linkedin.com/in/jay-ar-b-6a7343128/">Jay-ar Baniqued</a></h6>
                        
                    </center>
                    <div className='modal-action'>
                        <button onClick={() => closeModal()} className="btn">Close</button>
                    </div>
                </div>
            </dialog>
            <Footer />
        </div>
    );
}

export default ContactMe;
