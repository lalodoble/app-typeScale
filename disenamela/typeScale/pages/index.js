import Head from 'next/head'

import logo from '../public/logo-disenamela.png';

export default function Home() {
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
							<input type="number" step={1} value={15} className="text-center" style={{width: '5rem'}}/>
						</div>
						<div className="col-auto">
							<label htmlFor="">Scale</label>
							<select>
								<option value="">Px</option>
								<option value="">Pt</option>
							</select>
						</div>
					</div>

					<div className="row">
						<div className="col">
							<label htmlFor="">Font Family</label>
							<select>
								<option value="">Montserrat</option>
								<option value="">Arial</option>
								<option value="" selected>Open Sans</option>
								<option value="">Roboto</option>
								<option value="">Times New Roman</option>
								<option value="">Comic Sans</option>
							</select>
						</div>
						<div className="col-4">
							<label htmlFor="">Weight</label>
							<select>
								<option value="">100</option>
								<option value="">200</option>
								<option value="" selected>300</option>
								<option value="">400</option>
								<option value="">500</option>
								<option value="">600</option>
							</select>
						</div>
					</div>

					<label htmlFor="">Ratio</label>
					<select>
						<option value="1.067">1.067 – Minor Second</option>
						<option value="1.125">1.125 – Major Second</option>
						<option value="1.200">1.200 – Minor Third</option>
						<option value="1.250">1.250 – Major Third</option>
						<option value="1.333">1.333 – Perfect Fourth</option>
						<option value="1.414">1.414 – Augmented Fourth</option>
						<option value="1.500">1.500 – Perfect Fifth</option>
						<option value="1.618">1.618 – Golden Ratio</option>
					</select>

					<label htmlFor="">Preview Text</label>
					<input type="text" value={'Lorem ipsum door sit ammet'} />



				</SideBar>


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
