<template>
    <div class="container">
        <form>
            <div id="sheet-view">
                <div class="row">
                    <div class="col-md-4">

                        <div class="row">
                            <div class="col-md-12">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">name</span>
                                    </div>
                                    <input v-model="sheet.name" type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">player</span>
                                    </div>
                                    <input v-model="sheet.userName" type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">chronicle</span>
                                    </div>
                                    <input v-model="sheet.chronicle" type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1">
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-4">

                        <div class="row">
                            <div class="col-md-12">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">nature</span>
                                    </div>
                                    <input v-model="sheet.nature" type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">demeanor</span>
                                    </div>
                                    <input v-model="sheet.demeanor" type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">concept</span>
                                    </div>
                                    <input v-model="sheet.concept" type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1">
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-4">

                        <div class="row">
                            <div class="col-md-12">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">clan</span>
                                    </div>
                                    <input v-model="sheet.clan" type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">generation</span>
                                    </div>
                                    <input v-model="sheet.generation" type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon1">sire</span>
                                    </div>
                                    <input v-model="sheet.sire" type="text" class="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">

                        <div class="card">
                            <div class="card-header">
                                attributes
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-4">

                                        <div class="card">
                                            <div class="card-header">
                                                physical
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-md-12">

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="streength">streength</label>
                                                            </div>
                                                            <select class="custom-select" id="streength" v-model="sheet.attributes.physical.streength">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="dexterity">dexterity</label>
                                                            </div>
                                                            <select class="custom-select" id="dexterity" v-model="sheet.attributes.physical.dexterity">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="stamina">stamina</label>
                                                            </div>
                                                            <select class="custom-select" id="stamina" v-model="sheet.attributes.physical.stamina">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-md-4">

                                        <div class="card">
                                            <div class="card-header">
                                                social
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-md-12">

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="charisma">charisma</label>
                                                            </div>
                                                            <select class="custom-select" id="charisma" v-model="sheet.attributes.social.charisma">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="manipulation">manipulation</label>
                                                            </div>
                                                            <select class="custom-select" id="manipulation" v-model="sheet.attributes.social.manipulation">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="appearance">appearance</label>
                                                            </div>
                                                            <select class="custom-select" id="appearance" v-model="sheet.attributes.social.appearance">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-md-4">

                                        <div class="card">
                                            <div class="card-header">
                                                mental
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-md-12">

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="perception">perception</label>
                                                            </div>
                                                            <select class="custom-select" id="perception" v-model="sheet.attributes.mental.perception">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="intelligence">intelligence</label>
                                                            </div>
                                                            <select class="custom-select" id="intelligence" v-model="sheet.attributes.mental.intelligence">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="wits">wits</label>
                                                            </div>
                                                            <select class="custom-select" id="wits" v-model="sheet.attributes.mental.wits">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">

                        <div class="card">
                            <div class="card-header">
                                abilities
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-4">

                                        <div class="card">
                                            <div class="card-header">
                                                talents
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-md-12">

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="alertness">alertness</label>
                                                            </div>
                                                            <select class="custom-select" id="inputGroupSelect01" v-model="sheet.abilities.talents.alertness">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="athletics">athletics</label>
                                                            </div>
                                                            <select class="custom-select" id="inputGroupSelect01" v-model="sheet.abilities.talents.athletics">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="awareness">awareness</label>
                                                            </div>
                                                            <select class="custom-select" id="inputGroupSelect01" v-model="sheet.abilities.talents.awareness">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="brawl">brawl</label>
                                                            </div>
                                                            <select class="custom-select" id="inputGroupSelect01" v-model="sheet.abilities.talents.brawl">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="empathy">empathy</label>
                                                            </div>
                                                            <select class="custom-select" id="inputGroupSelect01" v-model="sheet.abilities.talents.empathy">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="expression">expression</label>
                                                            </div>
                                                            <select class="custom-select" id="inputGroupSelect01" v-model="sheet.abilities.talents.expression">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="intimidation">intimidation</label>
                                                            </div>
                                                            <select class="custom-select" id="inputGroupSelect01" v-model="sheet.abilities.talents.intimidation">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="leadership">leadership</label>
                                                            </div>
                                                            <select class="custom-select" id="inputGroupSelect01" v-model="sheet.abilities.talents.leadership">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="streetwise">streetwise</label>
                                                            </div>
                                                            <select class="custom-select" id="inputGroupSelect01" v-model="sheet.abilities.talents.streetwise">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="subterfuge">subterfuge</label>
                                                            </div>
                                                            <select class="custom-select" id="inputGroupSelect01" v-model="sheet.abilities.talents.subterfuge">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-md-4">

                                        <div class="card">
                                            <div class="card-header">
                                                skills
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-md-12">

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="animalken">animalken</label>
                                                            </div>
                                                            <select class="custom-select" id="animalken" v-model="sheet.abilities.skills.animalken">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="crafts">crafts</label>
                                                            </div>
                                                            <select class="custom-select" id="crafts" v-model="sheet.abilities.skills.crafts">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="drive">drive</label>
                                                            </div>
                                                            <select class="custom-select" id="drive" v-model="sheet.abilities.skills.drive">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="etiquette">etiquette</label>
                                                            </div>
                                                            <select class="custom-select" id="etiquette" v-model="sheet.abilities.skills.etiquette">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="firearms">firearms</label>
                                                            </div>
                                                            <select class="custom-select" id="firearms" v-model="sheet.abilities.skills.firearms">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="larceny">larceny</label>
                                                            </div>
                                                            <select class="custom-select" id="larceny" v-model="sheet.abilities.skills.larceny">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="melee">melee</label>
                                                            </div>
                                                            <select class="custom-select" id="melee" v-model="sheet.abilities.skills.melee">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="performace">performace</label>
                                                            </div>
                                                            <select class="custom-select" id="performace" v-model="sheet.abilities.skills.performace">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="stealth">stealth</label>
                                                            </div>
                                                            <select class="custom-select" id="stealth" v-model="sheet.abilities.skills.stealth">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="survivel">survivel</label>
                                                            </div>
                                                            <select class="custom-select" id="survivel" v-model="sheet.abilities.skills.survivel">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="col-md-4">

                                        <div class="card">
                                            <div class="card-header">
                                                knowledges
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-md-12">

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="academics">academics</label>
                                                            </div>
                                                            <select class="custom-select" id="academics" v-model="sheet.abilities.knowledges.academics">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="computer">computer</label>
                                                            </div>
                                                            <select class="custom-select" id="computer" v-model="sheet.abilities.knowledges.computer">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="finance">finance</label>
                                                            </div>
                                                            <select class="custom-select" id="finance" v-model="sheet.abilities.knowledges.finance">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="investigation">investigation</label>
                                                            </div>
                                                            <select class="custom-select" id="investigation" v-model="sheet.abilities.knowledges.investigation">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="law">law</label>
                                                            </div>
                                                            <select class="custom-select" id="law" v-model="sheet.abilities.knowledges.law">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="medicine">medicine</label>
                                                            </div>
                                                            <select class="custom-select" id="medicine" v-model="sheet.abilities.knowledges.medicine">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="occult">occult</label>
                                                            </div>
                                                            <select class="custom-select" id="occult" v-model="sheet.abilities.knowledges.occult">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="politics">politics</label>
                                                            </div>
                                                            <select class="custom-select" id="politics" v-model="sheet.abilities.knowledges.politics">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="science">science</label>
                                                            </div>
                                                            <select class="custom-select" id="science" v-model="sheet.abilities.knowledges.science">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                        <div class="input-group mb-3 input-group-sheet-point">
                                                            <div class="input-group-prepend">
                                                                <label class="input-group-text" for="technology">technology</label>
                                                            </div>
                                                            <select class="custom-select" id="technology" v-model="sheet.abilities.knowledges.technology">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                   
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div class="row">
                    <div class="col-md-12">

                        <div class="card">
                            <div class="card-header">
                                advantages
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-4">

                                        <div class="card">
                                            <!--
                                            <div class="card-header">
                                                disciplines
                                            </div>
                                            -->
                                            <div class="card-header container-fluid btn-card">
                                                <div class="row">
                                                    <div class="col-md-8">
                                                       disciplines
                                                    </div>
                                                    <div class="col-md-4 float-right">
                                                        <button class="btn btn-primary btn-sm">Add</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-md-12">

                                                        <div class="input-group mb-3 input-group-sheet-point" v-for="discipline in sheet.advantages.disciplines" :key="discipline.value">
                                                            <input type="text" class="form-control" v-model="discipline.name">
                                                            <select class="custom-select" id="streength" v-model="discipline.value">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4">

                                        <div class="card">
                                            <div class="card-header">
                                                backgrounds
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-md-12">

                                                        <div class="input-group mb-3 input-group-sheet-point" v-for="background in sheet.advantages.backgrounds" :key="background.value">
                                                            <input type="text" class="form-control" v-model="background.name">
                                                            <select class="custom-select" id="streength" v-model="background.value">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4">

                                        <div class="card">
                                            <div class="card-header">
                                                virtues
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-md-12">

                                                        <div class="input-group mb-3 input-group-sheet-point" v-for="virtue in sheet.advantages.virtues" :key="virtue.value">
                                                            <input type="text" class="form-control" v-model="virtue.name">
                                                            <select class="custom-select" v-model="virtue.value">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="row">
                    <div class="col-md-12">

                        <div class="card">
                            <div class="card-header">
                                misc
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-4">

                                        <div class="card">
                                            <div class="card-header">
                                                merits
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-md-12">

                                                        <div class="input-group mb-3 input-group-sheet-point" v-for="merit in sheet.footer.merits" :key="merit.value">
                                                            <input type="text" class="form-control" v-model="merit.name">
                                                            <select class="custom-select" id="streength" v-model="merit.value">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="card">
                                            <div class="card-header">
                                                flaws
                                            </div>
                                            <div class="card-body">
                                                <div class="row">
                                                    <div class="col-md-12">

                                                        <div class="input-group mb-3 input-group-sheet-point" v-for="flaw in sheet.footer.flaws" :key="flaw.value">
                                                            <input type="text" class="form-control" v-model="flaw.name">
                                                            <select class="custom-select" id="streength" v-model="flaw.value">
                                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        
                                        <div class="input-group mb-3 input-group-sheet-point">
                                            <div class="input-group-prepend">
                                                <label class="input-group-text" for="humanity">humanity</label>
                                            </div>
                                            <select class="custom-select" id="humanity" v-model="sheet.footer.humanity">
                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                            </select>
                                        </div>
                                        <div class="input-group mb-3 input-group-sheet-point">
                                            <div class="input-group-prepend">
                                                <label class="input-group-text" for="willpower">willpower</label>
                                            </div>
                                            <select class="custom-select" id="willpower" v-model="sheet.footer.willpower">
                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                            </select>
                                            <select class="custom-select" id="willpower-total" v-model="sheet.footer.willpowertotal">
                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                            </select>
                                        </div>
                                        <div class="input-group mb-3 input-group-sheet-point">
                                            <div class="input-group-prepend">
                                                <label class="input-group-text" for="willpower">willpower</label>
                                            </div>
                                            <select class="custom-select" id="willpower" v-model="sheet.footer.willpower">
                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                            </select>
                                        </div>
                                        <div class="input-group mb-3 input-group-sheet-point">
                                            <div class="input-group-prepend">
                                                <label class="input-group-text" for="bloodpool">bloodpool</label>
                                            </div>
                                            <select class="custom-select" id="bloodpool" v-model="sheet.footer.bloodpool">
                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                            </select>
                                        </div>
                                        <div class="input-group mb-3 input-group-sheet-point">
                                            <div class="input-group-prepend">
                                                <label class="input-group-text" for="health">health</label>
                                            </div>
                                            <select class="custom-select" id="health" v-model="sheet.footer.health">
                                                <option v-for="point in sheetPoint" :key="point" :value="point">{{ point }}</option>
                                            </select>
                                        </div>


                                        
                                    </div>

                                    <div class="col-md-4">
                                        <textarea v-model="sheet.notes" rows="20" class="form-control" id="validationTextarea" placeholder="Notes" required></textarea>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <button class="btn btn-primary" v-on:click="save" type="button">save</button>
            </div>
        </form>
    </div>
</template>

<script>
import api from '@/services/api.js';

export default {
    name: 'SheetVampire',
    data(){
        return {
            sheet: [],
            sheetPoint: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    },
    mounted(){
        api.get('f54734b7-84bf-4fc3-b297-a3e5be7db04c').then(response => {
            this.sheet = response.data;
        });
    },
    methods: {
        save: function () {
            //TODO: Implementar isso mais tarde. Por hora, usar como debug
            console.log(this.sheet);
        }
    }
}
</script>

<style scoped>
    form {
        text-transform: capitalize;
    }

    .input-group-sheet-point div label{
        min-width:220px;
    }

    #sheet-view {
        margin-top: 10px;
    }

    .input-group-text {
        min-width:110px;
        text-align:left;
    }

    .card-header {
        text-align: center;
        font-weight:bold;
    }

    .btn-card {
        text-align: left;
        font-weight:bold;
    }

    .card {
        margin-bottom: 20px;
    }
</style>