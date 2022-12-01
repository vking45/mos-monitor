import React from 'react'

function Tabs() {
  return (
    <div className="flex justify-center align-middle">
        
<div className="mb-4 border-b  dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
        <li className="mr-2" role="presentation">
            <button className="inline-block p-4 rounded-t-lg border-b-2 text-blue-600 border-blue-600 hover:text-blue-600 hover:border-blue-600 active:text-blue-600 " id="profile-tab" data-tabs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">xxx</button>
        </li>
        <li className="mr-2" role="presentation">
            <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent text-gray-100 hover:text-blue-600 hover:border-blue-600" id="dashboard-tab" data-tabs-target="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">yyyy</button>
        </li>
        <li className="mr-2" role="presentation">
            <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent text-gray-100 hover:text-blue-600 hover:border-blue-600" id="settings-tab" data-tabs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">zzzz</button>
        </li>
        <li role="presentation">
            <button className="inline-block p-4 rounded-t-lg border-b-2 border-transparent text-gray-100 hover:text-blue-600 hover:border-blue-600" id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="false">wwww</button>
        </li>
    </ul>
</div>


    </div>
  )
}

export default Tabs