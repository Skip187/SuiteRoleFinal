using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using GroupProject3.Models;
using Microsoft.AspNetCore.Cors;

namespace GroupProject3.Controllers
{
	public class ResidentsController : Controller
	{
		private readonly ResidentsContext _context;

		public ResidentsController(ResidentsContext context)
		{
			_context = context;
		}

		// GET: Residents
		[EnableCors("AllowOrigin")]
		public async Task<IActionResult> Index()
		{
			//return View(await _context.Residents.ToListAsync());
			return Json(await _context.Residents.OrderBy(rec => rec.UnitNum) .ToListAsync());
		}

		// GET: Residents/Details/5
		public async Task<IActionResult> Details(int? id)
		{
			if (id != null)
			{
				var resident = await _context.Residents.FirstOrDefaultAsync(m => m.ID == id);
				if (resident != null)
				{
//					return View(resident);
					return Json(resident);
				}
			}
			return NotFound();
		}

		// GET: Residents/Create
		public IActionResult Create()
		{
			return View();
		}

		// POST: Residents/Create
		// To protect from overposting attacks, please enable the specific properties you want to bind to, for 
		// more details see http://go.microsoft.com/fwlink/?LinkId=317598.
		[EnableCors("AllowOrigin")]
		[HttpPost]
		//[ValidateAntiForgeryToken]
		public async Task<IActionResult> Create([Bind("AcctOwner,UnitNum,LastName1,FirstName1,StorageNum,ContactNum1,ContactNum2,ContactNum3,Email1,Email2,Email3,Email4,ParkingSpot1,ParkingSpot2")] Resident resident)
		{
			if (ModelState.IsValid)
			{
				_context.Add(resident);
				await _context.SaveChangesAsync();
				return RedirectToAction(nameof(Index));
			}

			return View(resident);
		}

		// GET: Residents/Edit/5
		public async Task<IActionResult> Edit(int? id)
		{
			Console.WriteLine("Edit 1");
			if (id != null)
			{
				var resident = await _context.Residents.FindAsync(id);
				if (resident != null)
				{
					return View(resident);
				}
			}

			return NotFound();
		}

		// POST: Residents/Edit/5
		// To protect from overposting attacks, please enable the specific properties you want to bind to, for 
		// more details see http://go.microsoft.com/fwlink/?LinkId=317598.
		[EnableCors("AllowOrigin")]
		[HttpPost]
		//[ValidateAntiForgeryToken]
		public async Task<IActionResult> Edit(int id, [Bind("AcctOwner,UnitNum,LastName1,FirstName1,StorageNum,ContactNum1,ContactNum2,ContactNum3,Email1,Email2,Email3,Email4,ParkingSpot1,ParkingSpot2")] Resident resident)
		{

			Console.WriteLine(
				"\n\n"+
				"ID="+resident.ID+"\n"+
				"AO="+resident.AcctOwner+"\n"+
				"UN="+resident.UnitNum+"\n"+
				"LN="+resident.LastName1+"\n"+
				"FN="+resident.FirstName1+"\n"+
				"SN="+resident.StorageNum+"\n"+
				"C1="+resident.ContactNum1+"\n"+
				"C2="+resident.ContactNum2+"\n"+
				"C3="+resident.ContactNum3+"\n"+
				"E1="+resident.Email1+"\n"+
				"E2="+resident.Email2+"\n"+
				"E3="+resident.Email3+"\n"+
				"E4="+resident.Email4+"\n"+
				"P1="+resident.ParkingSpot1+"\n"+
				"P2="+resident.ParkingSpot2+"\n\n"
			);

			resident.ID = id;

			if (id != resident.ID)
			{
				Console.WriteLine("\n\nERROR: "+id+" != "+resident.ID+"\n\n");
				return NotFound();
			}

			if (ModelState.IsValid)
			{
				Console.WriteLine("\n\nModelState.IsValid = True\n\n");
				try
				{
					_context.Update(resident);
					await _context.SaveChangesAsync();
				}
				catch (DbUpdateConcurrencyException)
				{
					if (!ResidentExists(resident.ID))
					{
						Console.WriteLine("\n\nTRY failed. ResidentExists = FALSE \n\n");
						return NotFound();
					}
					else
					{
						throw;
					}
				}
				return RedirectToAction(nameof(Index));
			}
			return View(resident);
		}

		// GET: Residents/Delete/5
		public async Task<IActionResult> Delete(int? id)
		{
			if (id != null)
			{
				var resident = await _context.Residents.FirstOrDefaultAsync(m => m.ID == id);
				if (resident != null)
				{
					return View(resident);
				}
			}

			return NotFound();
		}

		// POST: Residents/Delete/5
		[EnableCors("AllowOrigin")]
		[HttpPost, ActionName("DeleteConfirmed")]
		//[ValidateAntiForgeryToken]
		public async Task<IActionResult> DeleteConfirmed(int id)
		{
			var resident = await _context.Residents.FindAsync(id);
			_context.Residents.Remove(resident);
			await _context.SaveChangesAsync();
			return RedirectToAction(nameof(Index));
		}

		private bool ResidentExists(int id)
		{
			return _context.Residents.Any(e => e.ID == id);
		}
	}
}