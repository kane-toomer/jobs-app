import React from "react";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Header = () => {
	return (
		<Disclosure as="nav" className="bg-gray-800">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
								<div className="flex flex-shrink-0 items-center">
									<img
										className="block h-8 w-auto lg:hidden"
										src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
										alt="Your Company"
									/>
									<img
										className="hidden h-8 w-auto lg:block"
										src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
										alt="Your Company"
									/>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								<button
									type="button"
									className="rounded-md bg-indigo-600 px-3 py-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
									<span className="sr-only">View notifications</span>
									Sign In
								</button>
							</div>
						</div>
					</div>
				</>
			)}
		</Disclosure>
	);
};

export default Header;
