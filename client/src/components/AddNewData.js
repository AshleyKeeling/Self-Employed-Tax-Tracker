import uploadIcon from '../assets/upload-icon.png';
import downloadIcon from '../assets/download-icon.png';

const AddNewData = () => {
    return (
        <div>
            <h2 className="fw-light">Add New Data</h2>
            <div className="border border-dark rounded-3">

                <label className="secondary-bg p-3 text-white border-bottom border-dark d-block text-center rounded-top-3" style={{ cursor: "pointer" }}>

                    <div className="row">
                        <img src={uploadIcon} className="col-2 col-md-3 img-fluid" style={{ aspectRatio: "1 / 1", height: "auto", maxWidth: "80px", objectFit: "contain" }}
                        />
                        <p className="col-10 col-md-9 fs-4 my-auto text-start">Upload Invoice</p>
                    </div>
                    <input type="file" hidden />
                </label>

                <label className="secondary-bg p-3 text-white border-bottom border-dark d-block text-center" style={{ cursor: "pointer" }}>

                    <div className="row">
                        <img src={uploadIcon} className="col-2 col-md-3 img-fluid" style={{ aspectRatio: "1 / 1", height: "auto", maxWidth: "80px", objectFit: "contain" }}
                        />
                        <p className="col-10 col-md-9 fs-4 my-auto text-start">Upload Expsense</p>
                    </div>
                    <input type="file" hidden />
                </label>

                <label className="secondary-bg p-3 text-white border-bottom border-dark d-block text-center " style={{ cursor: "pointer" }}>

                    <div className="row h-100">
                        <img src={uploadIcon} className="col-2 col-md-3 img-fluid" style={{ aspectRatio: "1 / 1", height: "auto", maxWidth: "80px", objectFit: "contain" }}
                        />
                        <p className="col-10 col-md-9 fs-4 my-auto text-start">Upload Additional Income</p>
                    </div>
                    <input type="file" hidden />
                </label>

                <label className="secondary-bg p-3 text-white d-block text-center rounded-bottom-3" style={{ cursor: "pointer" }}>

                    <div className="row">
                        <img src={downloadIcon} className="col-2 col-md-3 img-fluid" style={{ aspectRatio: "1 / 1", height: "auto", maxWidth: "80px", objectFit: "contain" }}
                        />
                        <p className="col-10 col-md-9 fs-4 my-auto text-start">Export as PDF</p>
                    </div>
                    <input type="file" hidden />
                </label>

            </div>
        </div>
    )
}

export default AddNewData;