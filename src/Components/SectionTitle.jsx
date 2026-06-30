function SectionTitle ({title, subtitle}) {
    return (
        <div className="mb-8 pt-32 pb-24">
            <p className="text-red-600 uppercase font-semibold text-sm">{subtitle}</p>
            <h2 className="text-4xl font-bold mt-2">{title}</h2>

        </div>
    );
}

export default SectionTitle;