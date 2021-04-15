import Head from 'next/head'
import { useEffect, useState } from 'react';

import logo from '../public/logo-disenamela.png';

export default function Home() {
	const [form, setForm] = useState({
		baseSize: 15,
		units: 'px',
		ratio: 1.200,
		fontFamily: 'Open Sans',
		previewText: 'Lorem ipsum dolor sit ammet',
	})

	const [results, setResults] = useState({
		h1: 15,
		h2: 15,
		h3: 15,
		h4: 15,
		h5: 15,
		h6: 15,
		p: 15,
	})

	useEffect(() => {
		if (form) {
			calcResults(form);
		}
	}, [form])

	function calcResults(data) {
		let newResults = data;

		let ratio = parseFloat(form.ratio);
		let baseSize = parseFloat(form.baseSize);

		newResults.h1 = baseSize * (ratio * ratio * ratio * ratio * ratio * ratio);
		newResults.h2 = baseSize * (ratio * ratio * ratio * ratio * ratio);
		newResults.h3 = baseSize * (ratio * ratio * ratio * ratio);
		newResults.h4 = baseSize * (ratio * ratio * ratio);
		newResults.h5 = baseSize * (ratio * ratio);
		newResults.h6 = baseSize * (ratio);
		newResults.p = baseSize;

		setResults(newResults);
	}

	function handleChange(e) {
		let newForm = form;
		newForm[e.target.name] = e.target.value;
		calcResults(newForm);

		setForm({ ...form, [e.target.name]: e.target.value });
	}


	return (
		<>
			<Head>
				<title>Diseñamela Typo</title>
				<link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png" />
				<link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png" />
				<link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png" />
				<link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png" />
				<link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png" />
				<link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png" />
				<link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png" />
				<link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png" />
				<link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
				<link rel="manifest" href="/favicon/manifest.json" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
				<meta name="theme-color" content="#ffffff" />
			</Head>

			<main className="mainLayout">
				<SideBar>
					<header className="border-b pb-2 mb-4">
						<a href="/" className="logo"><img src={logo} alt="Diseñamela.com" /></a>
					</header>

					<div className="row">
						<div className="col-auto">
							<label htmlFor="">Base Size</label>
							<input type="number" name={'baseSize'} step={1} value={form.baseSize} className="text-center" style={{ width: '5rem' }} onChange={handleChange} />
						</div>
						<div className="col-auto">
							<label htmlFor="unitx">Units</label>
							<select name={'units'} value={form.units} onChange={handleChange}>
								<option value="px">Px</option>
								<option value="pt">Pt</option>
							</select>
						</div>
					</div>

					<div className="row">
						<div className="col">
							<label htmlFor="fontFamily">Font Family</label>
							<select name={'fontFamily'} value={form.fontFamily} onChange={handleChange}>
								<option value="Arial">Arial</option>
								<option value="Anton">Anton</option>
								<option value="Comic Neue">Comic Neue</option>
								<option value="Montserrat">Montserrat</option>
								<option value="Open Sans" selected>Open Sans</option>
								<option value="Roboto">Roboto</option>
								<option value="Playfair Display">Playfair Display</option>
							</select>
						</div>
						{/* <div className="col-4">
							<label htmlFor="">Weight</label>
							<select>
								<option value="">100</option>
								<option value="">200</option>
								<option value="" selected>300</option>
								<option value="">400</option>
								<option value="">500</option>
								<option value="">600</option>
							</select>
						</div> */}
					</div>

					<label htmlFor="ratio">Ratio</label>
					<select name={'ratio'} value={form.ratio} onChange={handleChange}>
						<option value={1.067}>1.067 – Minor Second</option>
						<option value={1.125}>1.125 – Major Second</option>
						<option value={1.200} selected>1.200 – Minor Third</option>
						<option value={1.250}>1.250 – Major Third</option>
						<option value={1.333}>1.333 – Perfect Fourth</option>
						<option value={1.414}>1.414 – Augmented Fourth</option>
						<option value={1.500}>1.500 – Perfect Fifth</option>
						<option value={1.618}>1.618 – Golden Ratio</option>
					</select>

					<label htmlFor="">Preview Text</label>
					<input type="text" name='previewText' value={form.previewText} onChange={handleChange} />



				</SideBar>

				<section id="results">
					<div className="container-fluid">
						<div className="__textPreview">
							<TextPreviewCombo type='h1' results={results} form={form} />
							<TextPreviewCombo type='h2' results={results} form={form} />
							<TextPreviewCombo type='h3' results={results} form={form} />
							<TextPreviewCombo type='h4' results={results} form={form} />
							<TextPreviewCombo type='h5' results={results} form={form} />
							<TextPreviewCombo type='h6' results={results} form={form} />
							<TextPreviewCombo type='p' results={results} form={form} />
						</div>
					</div>
				</section>

			</main>
		</>
	)
}

export function SideBar(props) {
	return (
		<div className="sideBar px-5 p-4 shadow-lg">
			{props.children}
		</div>
	)
}


export function TextPreviewCombo(props) {
	let form = props.form;
	let results = props.results;

	let ems = (results[props.type] / form.baseSize);
	ems = ems % 1 === 0 ? ems : ems.toFixed(2);

	return (
		<div className="__combo">
			<div className="__desc">
				<h3>{props.type}</h3>
				<p>{parseInt(results[props.type]) + form.units} // {ems}em</p>
			</div>
			<p className={"__text --" + props.type} style={{ fontSize: results[props.type] + form.units, fontFamily: form.fontFamily }}>{form.previewText}</p>
		</div>
	)
}