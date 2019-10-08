	.section	.rodata
.LC0:
	.string	"hello world!"
.LC1:
	.string	"goodbye"
.LC2:
	.string	"second"
.LC3:
	.string	"printf call %s %d\n"
.LC4:
	.string	"and more"
.LC5:
	.string	"Hello World!"
	.text
<<<<<<< HEAD
<<<<<<< HEAD
	.globl	func
=======
	
.globl	func
>>>>>>> c355adf2383d54fc12ced3d611d5714a811f4701
=======
	.globl	func
>>>>>>> 89a8380f74c9f39f979ff1cb5706754f9ab1a0fa
	.type	func, @function
func:
	pushq	%rbp
	movq	%rsp, %rbp
<<<<<<< HEAD
	movq	$.LC0, %rsi
<<<<<<< HEAD
	call	puts

	popq	%rbp
	ret
	.globl	main
=======
=======
	movq	$.LC0, %rdi
>>>>>>> 89a8380f74c9f39f979ff1cb5706754f9ab1a0fa
	movl	$0, %eax
	call	puts

	popq	%rbp
	ret
<<<<<<< HEAD
	
.globl	main
>>>>>>> c355adf2383d54fc12ced3d611d5714a811f4701
=======
	.globl	main
>>>>>>> 89a8380f74c9f39f979ff1cb5706754f9ab1a0fa
	.type	main, @function
main:
	pushq	%rbp
	movq	%rsp, %rbp
<<<<<<< HEAD
	movq	$.LC1, %rsi
	movq	$.LC2, %rdi
	movl	$42, %eax
<<<<<<< HEAD
	call	func
=======
	movl	$0, %eax
	call	func

>>>>>>> c355adf2383d54fc12ced3d611d5714a811f4701
	movq	$.LC3, %rsi
	movq	$.LC4, %rdi
	movl	$42, %eax
	pushq	%rax
	movl	$4, %eax
	pushq	%rax
	movl	$5, %eax
	pushq	%rax
	movl	$2, %eax
=======
	movq	$.LC1, %rdi
	movq	$.LC2, %rsi
	movl	$42, %edx
	movl	$0, %eax
	call	func
	movq	$.LC3, %rdi
	movq	$.LC4, %rsi
	movl	$42, %edx
	pushq	%rdx
	movl	$4, %edx
	pushq	%rdx
	movl	$5, %edx
	pushq	%rdx
	movl	$2, %edx
>>>>>>> 89a8380f74c9f39f979ff1cb5706754f9ab1a0fa
	popq	%rcx
	addl	%ecx, %edx
	popq	%rcx
	addl	%ecx, %edx
	popq	%rcx
<<<<<<< HEAD
	addl	%ecx, %eax
<<<<<<< HEAD
	call	printf
	movq	$.LC5, %rsi
	call	puts

=======
=======
	addl	%ecx, %edx
>>>>>>> 89a8380f74c9f39f979ff1cb5706754f9ab1a0fa
	movl	$0, %eax
	call	printf
	movq	$.LC5, %rdi
	movl	$0, %eax
	call	puts

<<<<<<< HEAD

>>>>>>> c355adf2383d54fc12ced3d611d5714a811f4701
=======
>>>>>>> 89a8380f74c9f39f979ff1cb5706754f9ab1a0fa
	popq	%rbp
	ret
