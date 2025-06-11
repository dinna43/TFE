//tags

ServerEvents.tags('item', event => {
	event.add('forge:ingots/iron', 'tfc:metal/ingot/wrought_iron')
})

//recipes add

ServerEvents.recipes(event => {
	
		event.replaceInput(
		{input: 'minecraft:crafting_table'},
		'minecraft:crafting_table',
		'#tfc:workbenches'
	),
	
	event.replaceInput(
		{input: 'minecraft:crafting_table'},
		'minecraft:crafting_table',
		'#tfc:workbenches'
	),
	
	event.replaceInput(
		{input: 'minecraft:quartz'},
		'minecraft:quartz',
		'#forge:gems/quartz'
	),
	
		event.replaceInput(
		{input: 'minecraft:furnace'},
		'minecraft:furnace',
		'tfc:crucible'
	),
	
		event.replaceInput(
		{input: 'minecraft:iron_block'},
		'minecraft:iron_block',
		'tfc:metal/block/wrought_iron'
	),
	
		event.replaceInput(
		{input: 'ae2:sky_dust'},
		'ae2:sky_dust',
		'tfc:powder/graphite'
	),
	
		event.replaceInput(
		{input: 'ae2:smooth_sky_stone_block'},
		'ae2:smooth_sky_stone_block',
		'immersiveengineering:sheetmetal_steel'
	),
	
		event.replaceInput(
		{input: 'minecraft:ender_pearl'},
		'minecraft:ender_pearl',
		'ae2:fluix_pearl'
	),
	
	event.shaped(
  Item.of('ae2:fluix_pearl', 1), // arg 1: output
  [
    'ABA',
    'BCB', // arg 2: the shape (array of strings)
    'ABA'
  ],
  {
    A: 'ae2:fluix_dust',
    B: 'ae2:fluix_crystal',  //arg 3: the mapping object
    C: 'immersiveengineering:component_electronic'
  }
  ),

	
	event.remove({ mod: 'minecraft' }),
	
	event.remove({ id: 'ae2:misc/fluixpearl' })

	
	event.recipes.tfc.heating('ae2:certus_quartz_dust', 1000)
	 .resultItem('ae2:silicon'),
	 
	event.recipes.tfc.anvil(
		'immersiveengineering:dust_electrum',
		'#forge:ingots/electrum',
		[
			"punch_last",
			"punch_not_last",
			"punch_not_last"
		])
		.tier(2)


})

