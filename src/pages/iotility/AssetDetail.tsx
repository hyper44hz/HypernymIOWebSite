import React from 'react';
import { Link } from 'react-router-dom';
import { Check, MapPin, Radio, Wrench, Bell, Layers, ArrowRight } from 'lucide-react';
import { Asset } from '../../components/Asset';
import { CTABanner } from '../../components/CTABanner';

const content = {
  outdoor: {
    eyebrow: 'IOTILITY · OUTDOOR ASSET MANAGEMENT',
    title: 'Control every mobile asset across sites, yards and field operations.',
    intro: 'Track location, movement, utilisation, custody and condition for trailers, containers, generators, equipment and other non-powered assets.',
    image: '/SiteGraphics/products/outdoor-asset-dashboard.jpg',
    tech: 'GPS, cellular, LoRaWAN and satellite-ready device integrations',
    features: [['Live location & history','See current position, routes, dwell time and last known movement.'],['Geofences & custody','Detect unauthorised movement, site entry, exit and asset-to-vehicle assignment.'],['Utilisation intelligence','Identify idle, underused and overused equipment across the estate.'],['Maintenance workflows','Trigger service by mileage, runtime, movement or calendar schedule.']],
    uses: ['Construction equipment','Trailers and containers','Generators and compressors','Rental equipment','Cold-chain assets','Field service inventory']
  },
  indoor: {
    eyebrow: 'IOTILITY · INDOOR ASSET MANAGEMENT',
    title: 'Find critical equipment inside complex facilities—in seconds.',
    intro: 'Create room, zone or precise indoor visibility for high-value and frequently shared assets across hospitals, campuses, warehouses and industrial facilities.',
    image: '/SiteGraphics/products/indoor-asset-dashboard.jpg',
    tech: 'BLE, RFID and UWB options mapped to your accuracy and cost requirements',
    features: [['Floor-plan location','View assets by building, floor, department, room or real-time coordinate.'],['Search & availability','Help staff find the nearest available asset without calls or manual rounds.'],['Zone & movement alerts','Detect restricted-area entry, unexpected movement and assets leaving the facility.'],['Inventory & compliance','Automate asset counts, custody history and utilisation evidence.']],
    uses: ['Medical devices','IT and AV equipment','Tools and instruments','Warehouse inventory','University assets','High-value mobile equipment']
  }
} as const;

const icons = [MapPin, Bell, Layers, Wrench];

const AssetDetail: React.FC<{mode:'outdoor'|'indoor'}> = ({mode}) => {
  const p = content[mode];
  return <div><section className="section-padding bg-bg-primary"><div className="container mx-auto px-5 sm:px-8 lg:px-[60px] grid lg:grid-cols-2 gap-14 items-center"><div><span className="text-cyan-accent text-xs font-bold tracking-[.2em]">{p.eyebrow}</span><h1 className="mt-5 mb-6 text-4xl md:text-6xl leading-[1.05]">{p.title}</h1><p className="text-lg text-text-secondary leading-relaxed mb-9">{p.intro}</p><Link to="/contact" className="btn-primary">Plan an asset-tracking pilot</Link></div><Asset src={p.image} description={p.eyebrow} dimensions="800x600" className="w-full aspect-[4/3] rounded-2xl"/></div></section>
  <section className="py-10 bg-bg-secondary border-y border-border-subtle"><div className="container mx-auto px-5 sm:px-8 lg:px-[60px] flex items-center gap-4"><Radio className="text-cyan-accent shrink-0"/><p className="text-text-secondary"><strong className="text-text-primary">Flexible sensing layer:</strong> {p.tech}</p></div></section>
  <section className="section-padding bg-bg-primary"><div className="container mx-auto px-5 sm:px-8 lg:px-[60px]"><h2 className="mb-12">From dots on a map to operational control.</h2><div className="grid md:grid-cols-2 gap-6">{p.features.map(([title, body],i) => {const Icon=icons[i]; return <div key={title} className="bg-bg-secondary border border-border-subtle rounded-2xl p-8"><Icon className="text-cyan-accent mb-6"/><h3 className="text-xl mb-3">{title}</h3><p className="text-text-secondary leading-relaxed">{body}</p></div>})}</div></div></section>
  <section className="section-padding bg-bg-secondary"><div className="container mx-auto px-5 sm:px-8 lg:px-[60px] grid lg:grid-cols-2 gap-16"><div><span className="text-cyan-accent text-xs font-bold tracking-[.2em]">TYPICAL USE CASES</span><h2 className="mt-4">Built around the assets your operation depends on.</h2></div><div className="grid sm:grid-cols-2 gap-4">{p.uses.map(x=><div key={x} className="p-5 bg-bg-primary border border-border-subtle rounded-xl flex gap-3"><Check size={18} className="text-cyan-accent shrink-0"/>{x}</div>)}</div></div></section>
  <section className="section-padding bg-bg-primary"><div className="container mx-auto px-5 sm:px-8 lg:px-[60px]"><div className="rounded-3xl border border-border-subtle bg-bg-secondary p-8 md:p-12"><span className="text-cyan-accent text-xs font-bold tracking-[.2em]">ONE OPERATIONAL PICTURE</span><h2 className="mt-4 mb-5">Connect assets to vehicles, sites, people and work orders.</h2><p className="max-w-3xl text-text-secondary leading-relaxed mb-8">IoTility combines asset telemetry with fleet, facility and maintenance context. Teams can see not only where an asset is, but who has it, what it supports, whether it is available and what action is required.</p><Link to="/iotility" className="text-cyan-accent font-semibold flex gap-2">Explore the IoTility platform <ArrowRight size={18}/></Link></div></div></section><CTABanner h2={`Make every ${mode} asset visible and accountable.`}/></div>
};
export default AssetDetail;
