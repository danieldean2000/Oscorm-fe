'use client';

import Header from "@/components/header";



export default function WhyOscorm() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
            <Header />



            <section className="relative mt-[80px] bg-[#021533] min-h-[600px] flex items-center overflow-hidden px-6 py-12 lg:px-20">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="z-10 text-white space-y-6 max-w-2xl">
                        <h2 className="text-4xl md:text-5xl  font-bold leading-tight">
                            Enterprise-Grade Remote Workforce Solutions with AI-Driven Transparency
                        </h2>

                        <p className="text-slate-200 text-lg md:text-xl leading-relaxed">
                            Scale your operations with pre-vetted global talent, intelligent oversight, and measurable outcomes.
                            We deliver managed teams with enterprise-grade accountability, real-time visibility, and predictable performance.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-400 hover:from-blue-500 hover:to-teal-300 text-white font-semibold py-3 px-8 rounded-lg transition-all shadow-lg">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                Book Strategy Call
                            </button>

                            <button className="flex items-center gap-2 bg-white hover:bg-gray-100 text-slate-900 font-semibold py-3 px-8 rounded-lg transition-all shadow-lg">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                                Start Pilot Project
                            </button>
                        </div>
                    </div>

                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative bg-gradient-to-br from-[#052041] to-transparent rounded-3xl p-6 shadow-2xl w-full max-w-xl">
                            <img
                                src="/images/why-oscorm/why-oscorm.png"
                                alt="Team"
                                className="w-full rounded-2xl object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>


            {/* Comparison Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Why Choose Oscorm Over Traditional Solutions?
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Compare our AI-powered workforce solution against traditional approaches
                        </p>
                    </div>

                    {/* Mobile: Grid Layout */}
                    <div className="lg:hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {/* Top Left Card */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all">
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">Freelancer Marketplaces</h3>
                                <img src="/images/why-oscorm/why-oscorm.png" alt="Freelancer" className="w-20 h-20 mx-auto mb-4 rounded-lg" />
                                <p className="text-gray-600 mb-4">Too risky. No control, no visibility</p>
                            </div>

                            {/* Top Right Card */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all">
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">Outsourcing Agencies</h3>
                                <img src="/images/why-oscorm/why-oscorm.png" alt="Agencies" className="w-20 h-20 mx-auto mb-4 rounded-lg" />
                                <p className="text-gray-600 mb-4">Opaque, slow, unpredictable quality</p>
                            </div>

                            {/* Bottom Left Card */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all">
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">Recruiters</h3>
                                <img src="/images/why-oscorm/why-oscorm.png" alt="Recruiters" className="w-20 h-20 mx-auto mb-4 rounded-lg" />
                                <p className="text-gray-600 mb-4">High cost, no delivery responsibility</p>
                            </div>

                            {/* Bottom Right Card */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all">
                                <h3 className="text-xl font-semibold text-slate-900 mb-3">BPOs & Consultancies</h3>
                                <img src="/images/why-oscorm/why-oscorm.png" alt="BPOs" className="w-20 h-20 mx-auto mb-4 rounded-lg" />
                                <p className="text-gray-600 mb-4">Rigid, expensive, limited flexibility</p>
                            </div>
                        </div>

                        {/* Center Card Mobile */}
                        <div className="bg-gradient-to-br from-blue-600 to-teal-400 rounded-3xl p-8 text-white shadow-2xl text-center">
                            <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-sm font-medium mb-4">★ Recommended</div>
                            <h3 className="text-3xl font-bold mb-4">Oscorm</h3>
                            <p className="text-base text-white/90 leading-relaxed mb-6">
                                AI-powered structured workforce with enterprise-grade transparency, monitoring and trust. Get real-time visibility, managed accountability, and predictable performance.
                            </p>
                            <button className="bg-white/15 text-white px-4 py-2 rounded-lg font-medium hover:bg-white/20 transition">Not freelancers. A real workforce system.</button>
                        </div>
                    </div>

                    {/* Desktop: Absolute Position Layout */}
                    <div className="hidden lg:flex relative items-center justify-center min-h-[600px]">
                        {/* Top Left Card */}
                        <div className="absolute top-0 left-0 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all max-w-xs">
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">Freelancer Marketplaces</h3>
                            <img src="/images/why-oscorm/why-oscorm.png" alt="Freelancer" className="w-20 h-20 mx-auto mb-4 rounded-lg" />
                            <p className="text-gray-600 mb-4">Too risky. No control, no visibility</p>
                        </div>

                        {/* Top Right Card */}
                        <div className="absolute top-0 right-0 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all max-w-xs">
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">Outsourcing Agencies</h3>
                            <img src="/images/why-oscorm/why-oscorm.png" alt="Agencies" className="w-20 h-20 mx-auto mb-4 rounded-lg" />
                            <p className="text-gray-600 mb-4">Opaque, slow, unpredictable quality</p>
                        </div>

                        {/* Center Main Card */}
                        <div className="relative z-10 bg-gradient-to-r from-blue-600 to-teal-400 rounded-3xl p-10 text-white shadow-2xl border border-white/20 max-w-lg text-center">
                            <div className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-sm font-medium">★ Recommended</div>
                            <h3 className="text-4xl font-bold mb-6">Oscorm</h3>
                            <p className="text-lg text-white/90 leading-relaxed mb-6">
                                AI-powered structured workforce with enterprise-grade transparency, monitoring and trust. Get real-time visibility, managed accountability, and predictable performance.
                            </p>
                            <div className="bg-white/15 px-4 py-2 rounded-lg text-sm font-medium inline-block">Not freelancers. A real workforce system.</div>
                        </div>

                        {/* Bottom Left Card */}
                        <div className="absolute bottom-0 left-0 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all max-w-xs">
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">Recruiters</h3>
                            <img src="/images/why-oscorm/why-oscorm.png" alt="Recruiters" className="w-20 h-20 mx-auto mb-4 rounded-lg" />
                            <p className="text-gray-600 mb-4">High cost, no delivery responsibility</p>
                        </div>

                        {/* Bottom Right Card */}
                        <div className="absolute bottom-0 right-0 bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all max-w-xs">
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">BPOs & Consultancies</h3>
                            <img src="/images/why-oscorm/why-oscorm.png" alt="BPOs" className="w-20 h-20 mx-auto mb-4 rounded-lg" />
                            <p className="text-gray-600 mb-4">Rigid, expensive, limited flexibility</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Real-Time Visibility & Reporting Section */}
            <section className="relative py-20 px-6 lg:px-20 bg-gray-100">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                            Real-Time Visibility & Reporting
                        </h2>
                        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                            Clients access a secure, real-time workspace to track tasks, performance, timelines, and deliverables — all protected with enterprise-grade confidentiality.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

                        {/* Left: Large image card (spans two columns) */}
                        <div className="lg:col-span-2 flex justify-center">
                            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full">
                                <img
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                                    alt="Visibility"
                                    className="w-full h-[420px] object-cover rounded-2xl"
                                />
                            </div>
                        </div>

                        {/* Right: 2x2 Grid of Cards (compact) */}
                        <div className="lg:col-span-1">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                                    <div className="bg-gray-100 rounded-lg h-24 mb-4 overflow-hidden flex items-center justify-center">
                                        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80" alt="Hours" className="w-24 h-16 object-cover rounded-md" />
                                    </div>
                                    <h4 className="font-bold text-slate-800 text-center">Hour & effort logs</h4>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                                    <div className="bg-gray-100 rounded-lg h-24 mb-4 overflow-hidden flex items-center justify-center">
                                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&q=80" alt="Agency" className="w-24 h-16 object-cover rounded-md" />
                                    </div>
                                    <h4 className="font-bold text-slate-800 text-center">Deliverable review notes</h4>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                                    <div className="bg-gray-100 rounded-lg h-24 mb-4 overflow-hidden flex items-center justify-center">
                                        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80" alt="Timeline" className="w-24 h-16 object-cover rounded-md" />
                                    </div>
                                    <h4 className="font-bold text-slate-800 text-center">Project timelines</h4>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
                                    <div className="bg-gray-100 rounded-lg h-24 mb-4 overflow-hidden flex items-center justify-center">
                                        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&q=80" alt="Metrics" className="w-24 h-16 object-cover rounded-md" />
                                    </div>
                                    <h4 className="font-bold text-slate-800 text-center">Performance metrics</h4>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Dedicated Designer Section */}
            <section className="relative bg-[#001a3d] min-h-[500px] flex items-center overflow-hidden px-6 py-12 lg:px-20 rounded-3xl mx-0 lg:mx-4 my-12">
                <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="z-10 text-white space-y-6 max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Dedicated Designer
                        </h2>

                        <p className="text-white text-lg md:text-xl leading-relaxed">
                            We assign a full-time, in-house designer to your account who works exclusively on your tasks. That designer is managed by a Project Manager, passes through QA and AI checks, and delivers steady weekly/monthly output with full visibility via our tracking dashboard.
                        </p>
                    </div>

                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative bg-gradient-to-br rounded-3xl p-8 shadow-2xl w-full max-w-full">
                            <img
                                src="/images/why-oscorm/Engagement.png"






                                alt="Dedicated Designer"
                                className="w-full rounded-2xl object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>
















        </div>
    );
}