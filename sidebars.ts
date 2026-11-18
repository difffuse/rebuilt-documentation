import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
const sidebars: SidebarsConfig = {tutorialSidebar: [
'intro',
{type:'category',label:'Installation Guide',items:['installation','preferences']},
{type:'category',label:'How to Use',collapsed:false,items:['quick-start','auto','manual','retopology','seams','unwrap','existing-uvs','bake','report']},
{type:'category',label:'Export',items:['export','unity','unreal','godot']},
'help',
]};
export default sidebars;
