import { Container } from "react-bootstrap"
import { useState, useRef, useEffect } from "react";


import AddNewData from "../components/AddNewData";
import Breakdown from "../components/Breakdown";
import Infographics from "../components/Infographics";
import RecentActivity from "../components/RecentActivity";
import Documents from "../components/Documents";
import { useAuthContext } from "../hooks/useAuthContext";
import { useTaxRecord } from "../hooks/useTaxRecord";

const Dashboard = () => {

    const { user } = useAuthContext();
    const { taxRecord, loading, error, getTaxRecord } = useTaxRecord();

    let items = []
    if (taxRecord && taxRecord[0]) {
        const r = taxRecord[0];

        // Calculate taxable profit
        const taxableProfit = r.totalIncome - r.totalExpenses;

        // Calculate allowance remaining (never negative)
        const allowanceRemaining = Math.max(0, r.taxFreeAllowance - taxableProfit);

        items = [
            {
                title: "Next Payment Due",
                value: `31 Jan ${parseInt(r.taxYear) + 2}`
            },
            {
                title: "Estimated Tax Payment",
                value: `£${(r.totalIncomeTaxDue + r.totalNiDue).toLocaleString()}`
            },
            {
                title: "Income After Deductions",
                value: `£${(r.totalIncome - r.totalExpenses - r.totalIncomeTaxDue - r.totalNiDue).toLocaleString()}`
            },
            {
                title: "Tax Allowance Remaining",
                value: `£${allowanceRemaining.toLocaleString()} / £${r.taxFreeAllowance.toLocaleString()}`
            }
        ];
    }


    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const token = user.token;
        getTaxRecord(user.userID, token);   // fetch automatically on mount

    }, [user]);

    useEffect(() => {
        const container = scrollRef.current;
        const handleScroll = () => {
            const index = Math.round(container.scrollLeft / container.clientWidth);
            setActiveIndex(index);
        };
        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);



    if (loading) return <p>Loading tax data...</p>;
    if (error) return <p className="text-danger">{error}</p>;

    return (
        <Container>
            <h1 className="display-1 fw-bold mt-5">Welcome {user.firstName}</h1>
            <section
                ref={scrollRef}
                className="d-flex d-lg-none gap-3 overflow-auto py-1 snap-x scroll-smooth"
                style={{ scrollSnapType: "x mandatory" }}
            >
                {items.map((k, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0"
                        style={{ minWidth: "80%", scrollSnapAlign: "center" }}
                    >
                        <div className="primary-bg text-white rounded-3 p-3 text-center shadow-sm">
                            <div className="fw-semibold mb-1 opacity-90">{k.title}</div>
                            <div className="fw-bold fs-4">{k.value}</div>
                        </div>
                    </div>
                ))}
            </section>
            {taxRecord && (
                <div>




                    {/* Dots indicator (mobile only) */}
                    <div className="d-flex d-lg-none justify-content-center mt-2">
                        {items.map((_, i) => (
                            <div
                                key={i}
                                style={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: "50%",
                                    margin: "0 4px",
                                    backgroundColor: i === activeIndex ? "#0d6efd" : "#c0c0c0",
                                    transition: "background-color 0.3s",
                                }}
                            />
                        ))}
                    </div>

                    {/* Desktop grid */}
                    <section className="row row-cols-2 row-cols-lg-4 g-3 d-none d-lg-flex">
                        {items.map((k, i) => (
                            <div className="col" key={i}>
                                <div className="primary-bg text-white rounded-3 p-3 h-100 text-center shadow-sm">
                                    <div className="fw-semibold mb-1 opacity-90">{k.title}</div>
                                    <div className="fw-bold fs-4">{k.value}</div>
                                </div>
                            </div>
                        ))}
                    </section>


                    <div className="row my-5">
                        <div className="col-12 col-md-3 ">

                            {/* add data section */}
                            <AddNewData />

                            {/* Breakdown section */}
                            <Breakdown />
                        </div>


                        <div className="col-12 col-md-9">
                            {/*  Infographics */}
                            <Infographics />


                            {/* Recent Activity */}
                            <RecentActivity />

                            {/* Documents */}
                            <Documents />
                        </div>
                    </div>
                </div>
            )}
        </Container >
    )
}

export default Dashboard;